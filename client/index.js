import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router } from 'react-router-dom'
import history from './history'
import { App } from './components'

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider >
      <Router history={ history }>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
