import axios from 'axios'

let baseUrl = '/api/users'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3001/api/users'
}

const getOne = async () => await axios.get(baseUrl)

export default { getOne }