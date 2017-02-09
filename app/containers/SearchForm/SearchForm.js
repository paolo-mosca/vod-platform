import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  // static propTypes = {}
  // state = {}
  render () {
    let searchInputClasses =['searchInput']
    // update the class array if the state is visible
    if (!this.state.searchVisible) {
      searchInputClasses.push('active')
    }

    return (
      <input
        type='search'
        className={searchInputClasses}
        placeholder='Search'/>
    )
  }
}

SearchForm.propTypes = {
  searchVisible: PropTypes.bool
}
SearchForm.defaultProps = {
  searchVisible: false
}
