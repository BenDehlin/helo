import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Authentication from './Components/Authentication'
import NewPost from './Components/NewPost'
import BigPost from './Components/BigPost'

export default (
  <Switch>
    <Route exact path = '/' component={Authentication} />
    <Route path = '/register' component={Authentication} />
    <Route path = '/dashboard' component={Dashboard} />
    <Route path = '/newpost' component={NewPost} />
    <Route path = '/post/:id' component={BigPost} />
  </Switch>
)