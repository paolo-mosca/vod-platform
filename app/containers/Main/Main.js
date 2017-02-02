import React from 'react'
import { Header, Footer } from 'components'
import { connect } from 'react-redux'

const Main = React.createClass({
  propTypes: {
    location: React.PropTypes.object,
    children: React.PropTypes.element
  },
  render () {
    const {location, children} = this.props
    return (
      <div className='main-container'>
        <Header location={location}/>
        <div className='container'>
          {children}
        </div>
        <Footer />
      </div>
    )
  }
})

export default Main
