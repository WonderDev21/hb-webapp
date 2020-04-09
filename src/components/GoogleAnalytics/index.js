import React from 'react'
import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)

class GoogleAnalytics extends React.Component {
  constructor (props) {
    super(props)

    this.unlisten = null
  }

  componentDidMount () {
    this.unlisten = this.props.history.listen((location, action) => {
      ReactGA.pageview(location.pathname)
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render () {
    return (
      this.props.children
    )
  }
}

export default withRouter(GoogleAnalytics)
