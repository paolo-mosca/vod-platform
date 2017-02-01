import React from 'react'
import { Link } from 'react-router'
import SecondaryHeader from './SecondaryHeader'

const Header = React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
  render () {
    const {location} = this.props
    return (
      <header className='navigation__header'>
        <div className='group container nav-wrapper'>
          <nav className='primary-nav'>
            <div className='nav-wrapper'>
              <Link to='/' href='/'><img className = 'keychn-logo' src="../../public/img/KeychnSignature.png" /></Link>
              <ul className= 'menu-link'>
                <li><Link to='/' href='/'>Recipes</Link></li>
                <li><Link to='/recipe/create' href='/'>Create Recipe</Link></li>
                <li><Link to='/register' href='/' id ='register'>Register</Link></li>
              </ul>
            </div>
          </nav>
          {location.pathname === '/' ? <SecondaryHeader /> : null}
        </div>
      </header>
    )
  }
})

export default Header
