import React from 'react'
import logo from '../images/Logo .svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt="Logo" />
          <p>A family restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='contact-info'>
          <h3>Contact Us</h3>
          <div className='contact-details'>
            <p> 123 Main St, USA</p>
            <p>+ 0000 0000 0000</p>
            <p>info@lemonlemon.com</p>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <p> 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer