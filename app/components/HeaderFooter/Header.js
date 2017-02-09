import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { SearchForm } from 'containers'
import SecondaryHeader from './SecondaryHeader'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVisible: false
    }
    this.showSearch = this.showSearch.bind(this)
    this.handleSearch =this.handleSearch.bind(this)
  }
  //toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible:!this.state.searchVisible
    })
  }
  handleSearch(val) {

  }
  render () {
    let searchInputClasses =['searchInput']
    // update the class array if the state is visible
    if (!this.state.searchVisible) {
      searchInputClasses.push('active')
    }
    const {location} = this.props
    return (
      <header className='navigation__header'>
        <div className='group container nav-wrapper'>
          <nav className='primary-nav'>
            <SearchForm
              searchVisible={this.state.searchVisible}
              onSubmit={this.handleSearch}/>

            <div
              onClick={this.showSearch}
              className='searchIcon'></div>

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
}

Header.propTypes = {
  location: PropTypes.object
}

export default Header
