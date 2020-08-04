import React, { useEffect } from 'react'
import setService from '../services/setService'
import Set from './Set'
import AddSet from './AddSet'
import { useRecoilState } from 'recoil'
import { setsState } from '../store'

const Sets = ({ user }) => {
  const [sets, setSets] = useRecoilState(setsState)

  const addSet = async set => {
    const newSet = await setService.create({ ...set, username: user.username })
    setSets(sets.concat(newSet))
  }

  const filteredSets = () => sets.filter(s => s.username === user.username)

  return (
    <div>
      {
        user
          ?
          <div>
            <AddSet handleAddSet={addSet} />
            <div>
              {filteredSets().map(s => (
                <Set key={s.id} set={s}>{s.name}</Set>
              ))}
            </div>
          </div>
          : <span>login to see sets</span>
      }
    </div>
  )
}

export default Sets