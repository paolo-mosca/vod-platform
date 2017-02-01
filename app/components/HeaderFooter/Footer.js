import React from 'react'
import { Link } from 'react-router'

function Footer () {
  return (
    <footer className='primary-footer'>
      <div className='group container nav-wrapper'>
        <small>&copy; Keychn Experience</small>
        <div className='social-icons'>
          <Link href='https://www.facebook.com/keychn/'><img className = 'logo-social-media' src="../../public/icons/facebook.svg" /></Link>
          <Link href='https://www.twitter.com/keychn/'><img className = 'logo-social-media' src="../../public/icons/twitter.svg" /></Link>
          <Link href='https://www.instagram.com/keychn/'><img className = 'logo-social-media' src="../../public/icons/instagram.svg" /></Link>
        </div>
        <nav className='secondary-nav'>
          <Link to='/aboutus' href='/'>About us</Link>
          <Link to={'/terms'} >Terms</Link>
          <Link to={'/privacy-policy'} >Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
