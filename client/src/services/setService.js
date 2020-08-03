import axios from 'axios'

let baseUrl = '/api/sets'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3001/api/sets'
}

const getAll = async () => (await axios.get(baseUrl)).data
const create = async set => (await axios.post(baseUrl, set)).data

export default { getAll, create }