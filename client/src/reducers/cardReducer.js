import cardService from '../services/cardService'

const cardReducer = (state = [], action) => {
  const id = action === null ? action.data.id : undefined
  switch (action.type) {
    case 'GET_CARDS':
      return action.data
    case 'CREATE_CARD':
      return [...state, action.data]
    case 'CHANGE_CARD':
      const card = action.data
      return state.map(c => c.id === id ? card : c)
    case 'DELETE_CARD':
      return state.filter(c => c.id !== id)
    default:
      return state
  }
}

export const getCards = () => {
  return async dispatch => {
    const cards = await cardService.getAll()
    dispatch({
      type: 'GET_CARDS',
      data: cards
    })
  }
}

export const createCard = content => {
  return async dispatch => {
    const newCard = await cardService.create(content)
    dispatch ({
      type: 'CREATE_CARD',
      data: newCard
    })
  }
}

export default cardReducer