import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='Banner'>
      {/* Banner text */}
      <div>
        <p>We are a family owned Mediterranean restaurant, <br className='mobile-hidden'/>focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button aria-label='On Click'>Reserve a table</button>
        </Link>
      </div>
    </section>
  )
}

export default Banner