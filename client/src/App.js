import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import loginService from './services/loginService'
import setService from './services/setService'
import { useHistory } from 'react-router-dom'
import { RecoilRoot, useRecoilState } from 'recoil'
import { userState, setsState } from './store'

const App = () => {
  const [user, setUser] = useRecoilState(userState)
  const [sets, setSets] = useRecoilState(setsState)

  useEffect(() => { (async () => setSets(await setService.getAll()))() })

  const history = useHistory()

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
    <RecoilRoot>
      <Navbar user={user} handleLogout={handleLogout} />
      <Main handleLogin={handleLogin} user={user} />
    </RecoilRoot>
  )
}

export default App