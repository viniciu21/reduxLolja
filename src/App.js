import React from 'react'

import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';

import Global from './styles/global'

import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Global />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
