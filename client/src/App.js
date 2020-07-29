import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCards } from './reducers/cardReducer'

const App = () => {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

  return (
    <div>
      <ul>
        {cards.map(c => <li>{c.front}</li>)}
      </ul>
    </div>
  )
}

export default App