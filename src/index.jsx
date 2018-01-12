/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  even tho those 2 deps are only used in development
  eslint has no way to tell that and outputs an error
*/

// react deps
import React from 'react'
import ReactDOM from 'react-dom'
// hot reload for development
import { AppContainer } from 'react-hot-loader'

import App from './App'

import './style.sass'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}