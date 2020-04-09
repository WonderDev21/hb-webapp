import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { checkCookie } from '../../../utils/Cookies'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={
    (props) => (
      checkCookie() !== null ? (
        <Component { ...props } />
      ) : (
        <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
  )} />
)
