import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background: lightgrey;
  width: 100%;
  max-width: 30rem;
  height: 2rem;
  border: 3px solid black;
  border-radius: 1rem;
  margin: 1rem;
  padding: .5rem;
`

const Set = ({ set, collapsed }) => {
  return (
    <div>
      {collapsed
        ? <Div>{set.name}: {set.cards.length} cards</Div>
        : null
      }
    </div>
  )
}

export default Set