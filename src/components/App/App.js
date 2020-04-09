import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { userContext } from '../../lib/contexts/userContext'

import * as actions from '../../store/actions/index'
import PrivateRoute from './PrivateRoute'
import './App.scss'

// Public routes
import LandingPage from '../LandingPage/LandingPage'
import Login from '../../containers/Authentication/Login/Login'
import StudentSignUp from '../../containers/Authentication/StudentSignUp/StudentSignUp'
import TeacherSignUp from '../../containers/Authentication/TeacherSignUp/TeacherSignUp'
import ResetPassword from '../../containers/Authentication/ResetPassword/ResetPassword'
import RecoverPassword from '../../containers/Authentication/RecoverPassword/RecoverPassword'

// Student
import StudentKits from '../../containers/Student/KitsMain/KitsMain'
import StudentKitDetail from '../../containers/Student/KitDetail/KitDetail'
import StudentProfile from '../../containers/Student/Profile/GetProfile'
import StudentEditProfile from '../../containers/Student/Profile/EditProfile'
import SelectLanguage from '../../containers/Student/Onboarding/SelectLanguage'

import StudentTickets from '../../containers/Student/Ticket/StudentTickets'
import StudentCreateTicket from '../../containers/Student/Ticket/CreateTicket'
import LearnTab from '../../containers/Student/LearnTab'
// import StudentLearnDetail from '../../containers/Student/LearnDetail1/LearnDetail'
import LearningPaths from '../../containers/Student/LearningPaths/LearningPaths'

// Teacher
import TeacherDashboard from '../../containers/Teacher/TeacherDashboard'
import TeacherProfile from '../../containers/Teacher/Profile/GetProfile'
import TeacherSchoolCode from '../../containers/Teacher/SchoolCode/SchoolCode'
import TeacherCodeVerificationNotifier from '../../containers/Teacher/SchoolCode/CodeVerificationNotifier'
import TeacherEditProfile from '../../containers/Teacher/Profile/EditProfile'
import TeacherInvitation from '../../containers/Teacher/Invitation/AcceptInvitation'

// Admin
import AdminLogin from '../../containers/Admin/Auth/Login'
import AdminKits from '../../containers/Admin/KitsDashboard/KitsDashboard'
import CreateKit from '../../containers/Admin/CreateKit/CreateKit'
import EditKit from '../../containers/Admin/EditKit/EditKit'

import { GoProRoutes } from '../../GoPro'
import GoogleAnalytics from '../GoogleAnalytics'

// Localization
import { IntlProvider, addLocaleData } from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_es from 'react-intl/locale-data/es'
import messages_es from '../../translations/es.json'
import messages_en from '../../translations/en.json'

let language = navigator.language.split(/[-_]/)[0]
const messages = {
  es: messages_es,
  en: messages_en
}

addLocaleData([...locale_en, ...locale_es])

class App extends Component {
  render() {
    const lang = this.props.language || language

    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <userContext.Provider value={this.props.user}>
          <BrowserRouter>
            <GoogleAnalytics>
              <Switch>
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/student/login" component={Login} />
                <Route path="/teacher/login" component={Login} />
                <Route path="/student/sign-up" component={StudentSignUp} />
                <Route path="/teacher/sign-up" component={TeacherSignUp} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/admin/login" component={AdminLogin} />
                <Route
                  path="/teacher/invite/:token"
                  component={TeacherInvitation}
                />
                <PrivateRoute
                  path="/teacher/profile"
                  component={TeacherProfile}
                />
                <PrivateRoute
                  path="/teacher/school-code"
                  component={TeacherSchoolCode}
                />
                <PrivateRoute
                  path="/teacher/school-code-notifier"
                  component={TeacherCodeVerificationNotifier}
                />
                <PrivateRoute
                  path="/teacher/edit-profile"
                  component={TeacherEditProfile}
                />
                <Route path="/recover-password" component={RecoverPassword} />
                <PrivateRoute path="/onboarding" component={SelectLanguage} />
                <PrivateRoute
                  exact
                  path="/student/kits"
                  component={StudentKits}
                />
                <PrivateRoute
                  exact
                  path="/student/kits/:kitId"
                  component={StudentKitDetail}
                />
                <PrivateRoute path="/student/learn" component={LearnTab} />
                {/* <PrivateRoute
                  exact
                  path="/student/learn/:id"
                  component={StudentLearnDetail}
                /> */}
                {/* <PrivateRoute
                  path="/student/learning-paths"
                  component={LearningPaths}
                /> */}
                <PrivateRoute
                  path="/student/profile"
                  component={StudentProfile}
                />
                <PrivateRoute
                  path="/student/edit-profile"
                  component={StudentEditProfile}
                />
                <PrivateRoute
                  path="/student/create-ticket"
                  component={StudentCreateTicket}
                />
                <PrivateRoute
                  path="/student/tickets"
                  component={StudentTickets}
                />
                <PrivateRoute
                  path="/teacher/dashboard"
                  component={TeacherDashboard}
                />
                <PrivateRoute path="/admin/dashboard" component={AdminKits} />
                <PrivateRoute path="/admin/create-kit" component={CreateKit} />
                <PrivateRoute path="/admin/edit-kit" component={EditKit} />
                <GoProRoutes />
              </Switch>
            </GoogleAnalytics>
          </BrowserRouter>
        </userContext.Provider>
      </IntlProvider>
    )
  }
}

const mapStateToProps = state => ({
  language: state.common.language,
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    updateLanguage: locale => dispatch(actions.updateLocaleLanguage(locale))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
