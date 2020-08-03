import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import loginService from './services/loginService'
import setService from './services/setService'
import { useHistory } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)

  const history = useHistory()

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('user')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
    }
  }, [])

  const handleLogin = async credentials => {
    try {
      const loggedUser = await loginService.login(credentials)
      setUser(loggedUser)
      window.localStorage.setItem('user', JSON.stringify(loggedUser))
      history.push('/sets')
    } catch (e) {
      console.log('wrong credentials');
    }
  }

  const handleLogout = async () => {
    window.localStorage.clear()
    setUser(null)
  }

  const handleAddSet = async set => {
    try {
      const newSet = { ...set, username: user.username }
      console.log(newSet)
      await setService.create(newSet)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
      <Main handleLogin={handleLogin} user={user} handleAddSet={handleAddSet} />
    </div>
  )
}

export default App