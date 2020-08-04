import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const Set = ({ set }) => {
  return (
    <div>
      <Link to={`/sets/${set.id}`}><Div>{set.name}: {set.cards.length} cards</Div></Link>
    </div>
  )
}

export default Set