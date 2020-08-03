import React, { useState, useEffect } from 'react'
import setService from '../services/setService'
import Set from './Set'
import AddSet from './AddSet'

const Sets = ({ user, handleAddSet }) => {
  const [sets, setSets] = useState([])

  useEffect(() => {(async () => setSets(await setService.getAll()))()}, [])
  
  const filteredSets = () => sets.filter(s => s.username === user.username)

  return (
    <div>
      {
        user
          ?
          <div>
            <AddSet handleAddSet={handleAddSet} />
            <div>
              {filteredSets().map(s => (
                <Set key={s.id} set={s} collapsed={true}>{s.name}</Set>
              ))}
              </div>
            </div>
          : <span>login to see sets</span>
      }
    </div>
  )
}

export default Sets