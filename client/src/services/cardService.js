import axios from 'axios'

const baseUrl = '/api/cards'

const getAll = async () => (await axios.get(baseUrl)).data
const create = async content => (await axios.post(baseUrl, content)).data
const update = async (id, content) => (await axios.put(`${baseUrl}/${id}`, content)).data
const remove = async id => (await axios.delete(`${baseUrl}/${id}`)).data

export default { getAll, create, update, remove }