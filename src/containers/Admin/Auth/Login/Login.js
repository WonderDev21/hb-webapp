import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import AuthHeader from '../../../../components/Common/Header/AuthHeader/AuthHeader'
import LoginForm from './LoginForm'
import { fetchAdminLogin } from '../../../../store/reducers/admin'
import { getUser } from '../../../../store/actions/user'

import Logo from '../../../../assets/img/admin-logo.png'
import './Login.scss'

const Login = () => {
  const dispatch = useDispatch()

  const token = useSelector(state => state.adminReducer.token)
  const role = useSelector(state => state.user.role)
  const state = useSelector(state => state.adminReducer.state)

  useEffect(() => {
    if (token !== '') {
      dispatch(getUser(token))
    }
  }, [token])

  const onSubmit = values => {
    let data = {}
    data['data'] = {}
    data['data']['type'] = 'token'
    data['data']['attributes'] = values
    dispatch(fetchAdminLogin(data))
  }

  if (role === 'Teacher') {
    return <Redirect to="/teacher/dashboard" />
  } else if (role === 'Admin') {
    return <Redirect to="/admin/dashboard" />
  } else if (role === 'Student') {
    return <Redirect to="/student/kits" />
  }

  return (
    <Container>
      <AuthHeader />
      <Row className="justify-content-center login">
        <Col xs="auto">
          <img src={Logo} alt="logo" />
        </Col>
        <Col xs="auto" className="text-md-left text-center">
          <h4>
            <FormattedMessage
              id="app.admin.login.title"
              defaultMessage="Welcome to the "
            />
            <strong>
              <FormattedMessage
                id="app.admin.login.typetitle"
                defaultMessage="Admin Portal"
              />
            </strong>
          </h4>
          <h5>
            <FormattedMessage
              id="app.admin.login.subtitle"
              defaultMessage="HEARTBIT’s adaptive learning software!"
            />
          </h5>
        </Col>
      </Row>
      <LoginForm submit={onSubmit} state={state} />
    </Container>
  )
}

export default Login
