import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import Logos from '../../../../assets/img/icon-logos.png'
import classes from './LoginHere.module.scss'

const LoginHere = () => {
  return (
    <div className="col-12 text-center">
      <p className={classes.Text}>
        <FormattedMessage
          id="app.recover_password"
          default="Or just remembered your password?"
        />
        <Link to="/">
          {' '}
          <FormattedMessage
            id="app.landing_page.here"
            defaultMessage="Login here"
          />
        </Link>
      </p>
      <img src={Logos} alt="Kits" />
      <div className="mt-7" />
    </div>
  )
}

export default LoginHere
