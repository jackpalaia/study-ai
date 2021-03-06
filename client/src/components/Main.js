import React from 'react'
import Home from './Home'
import Sets from './Sets'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'

const Main = ({ handleLogin, user, handleAddSet }) => {

  return (
    <main>
      <Switch>
        <Route path='/sets'>
          <Sets user={user} handleAddSet={handleAddSet} />
        </Route>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </main>
  )

}

export default Main