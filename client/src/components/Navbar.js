import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user, handleLogout }) => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/sets'>My Sets</Link>
    {user !== null
      ?
      <span>
        {user.name} logged in
        <button onClick={handleLogout}>logout</button>
      </span>
      : <Link to='/login'>Login</Link>
    }
  </nav>
)

export default Navbar