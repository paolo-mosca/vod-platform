import React from 'react'
import Header from './HeaderFooter/Header'
import Footer from './HeaderFooter/Footer'

const Main = React.createClass({
  propTypes: {
    location: React.PropTypes.object,
    children: React.PropTypes.element
  },
  render () {
    const {location} = this.props
    return (
      <div className='main-container'>
        <Header location={location}/>
        <div className='container'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})

export default Main
