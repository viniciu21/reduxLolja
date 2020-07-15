import React from 'react'
import {ToastContainer} from 'react-toastify'

import './config/ReactotronConfig'

import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Global from './styles/global'

import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Global />
        <Routes />
        <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
