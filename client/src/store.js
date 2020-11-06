import { atom, selector } from 'recoil'

// this works though
const loggeduser = window.localStorage.getItem('user')
let user
if (loggeduser) {
  user = JSON.parse(loggeduser)
}

// doesn't work for some reason
// const sets = (async () => await setService.getAll())()
const sets = []

export const userState = atom({
  key: 'user',
  default: user
})

export const setsState = atom({
  key: 'sets',
  default: []
})