import React, { useState } from 'react'

const AddSet = ({ handleAddSet }) => {
  const [expanded, setExpanded] = useState(false)
  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    handleAddSet({ name: text })
    setText('')
  }

  return (
    <div>
      {expanded &&
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={({ target }) => setText(target.value)} />
          <button type={"submit"}>add</button>
        </form>
      }
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'cancel' : 'add'}
      </button>
    </div>
  )
}

export default AddSet