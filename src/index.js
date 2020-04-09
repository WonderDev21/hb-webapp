import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/createStore'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import App from './components/App/App'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

store.subscribe(() => {
  localStorage.setItem('nativo-digital', JSON.stringify(store.getState()))
})

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  console.warn('HMR activated')
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default
    render(NextApp)
  })
}
