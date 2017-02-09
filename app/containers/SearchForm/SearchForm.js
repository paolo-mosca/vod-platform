import React, { PropTypes, Component } from 'react'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
    this.updateSearchInput = this.updateSearchInput.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  updateSearchInput(event) {
    //This function will be called when the search input changes
    this.setState({
      searchText: event.target.value
    })
  }

  submitForm(event) {
    //prevent the form from reloading the entire page
    event.preventDefault()
    // call the callback with the search value
    console.log(this.state.searchText);
    this.props.onSubmit(this.state.searchText)
  }
  render () {
    let searchInputClasses =['searchInput']
    // update the class array if the state is visible
    if (!this.state.searchVisible) {
      searchInputClasses.push('active')
    }

    return (
      <form onSubmit={this.submitForm}>
        <input
          type='search'
          value={this.state.searchText}
          className={searchInputClasses}
          onChange={this.updateSearchInput}
          placeholder='Search ...'/>
      </form>
    )
  }
}

SearchForm.propTypes = {
  searchVisible: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}
SearchForm.defaultProps = {
  searchVisible: false,
  onSubmit: () => {} //prevent explosions
}
