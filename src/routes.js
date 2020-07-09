import React from 'react'

import Home from './pages/Home'
import Cart from './pages/Cart'

import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
}

export default Routes
