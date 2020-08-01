import axios from 'axios'

let baseUrl = '/api/login'
if (process.env.NODE_ENV === 'development') {
  baseUrl = `http://localhost:3001/api/login`
}

const login = async credentials => (await axios.post(baseUrl, credentials)).data

export default { login }