import React from 'react'
import Home from './Home'
import Sets from './Sets'
import Login from './Login'
import SetPage from './SetPage'
import { Switch, Route } from 'react-router-dom'

const Main = ({ handleLogin, user }) => {
  return (
    <main>
      <Switch>
        <Route path='/sets/:id' component={SetPage} />
        <Route path='/sets'>
          <Sets user={user} />
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