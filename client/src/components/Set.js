import React from 'react'

const Set = ({ set, collapsed }) => {
  return (
    <div>
      {collapsed
        ? 
        <div style={{border: solid}}>
          {set.name}
        </div>
        : }
    </div>
  )
}

export default Set