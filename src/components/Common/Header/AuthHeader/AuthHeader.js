import React from 'react'
import { FormattedMessage } from 'react-intl'

const AuthHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand fixed-top bg-blue-dark ">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="http://www.makerkits.io/">
                <FormattedMessage
                  id="app.auth_header.return_to_makerkits"
                  defaultMessage="Return to makerkits.io"
                />
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default AuthHeader
