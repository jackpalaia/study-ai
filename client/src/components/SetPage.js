import React from 'react'
import { setsState } from '../store'
import { useRecoilValue } from 'recoil'

const SetPage = ({ match }) => {
  const id = match.params.id
  const sets = useRecoilValue(setsState)
  const set = sets.find(s => s.id === id)
  console.log(sets)
  return (
    <div>
      <h3>{set.name}</h3>
      {set.cards.map(c => console.log(c.id))}
    </div>
  )
}

export default SetPage