import React, { useState, useEffect } from 'react'
import setService from '../services/setService'

const Sets = ({ user }) => {
  const [sets, setSets] = useState([])

  useEffect(() => {(async () => setSets(await setService.getAll()))()}, [])
  
  const filteredSets = () => sets.filter(s => s.user === user.username)

  return (
    <div>
      {
        user
          ? filteredSets().map(s => (
            <div key={s.id}>{s.name}</div>
          ))
          : null
      }
    </div>
  )
}

export default Sets