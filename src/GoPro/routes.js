import React from 'react'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from '../lib/components/PrivateRoute'
import PlansSummaryPage from './pages/PlansSummaryPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { SubscriptionConfirmedPage } from './pages/SubscriptionConfirmedPage'

const routes = [
  {
    path: '/plans',
    Component: PlansSummaryPage,
  },
  {
    path: '/checkout',
    Component: CheckoutPage,
  },
  {
    path: '/gopro/success',
    Component: SubscriptionConfirmedPage
  }
]

export const GoProRoutes = ({ ...props }) => (
  <Switch>
    {
      routes.map(({ path, Component }, index) => (
        <PrivateRoute key={index} path={path} component={Component} {...props} />
      ))
    }
  </Switch>
)
