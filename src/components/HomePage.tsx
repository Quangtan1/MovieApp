import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <button>
        <Link to='movie'>Movie</Link>
        </button>
    </div>
  )
}

export default HomePage
