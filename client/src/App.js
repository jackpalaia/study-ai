import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import loginService from './services/loginService'
import { useHistory } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)

  const history = useHistory()
  console.log(user)

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

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
      <Main handleLogin={handleLogin} user={user} />
    </div>
  )
}

export default App