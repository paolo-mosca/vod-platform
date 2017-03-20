import React, { PropTypes, Component } from 'react'
import { RecipeList } from 'components'


const rootURl = `https://api.keychn.com`
const endpoint = `/recipes`

class RecipeListOther extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      searchFilter:'',
      recipes: []
    }
    this.onComponentRefresh = this.onComponentRefresh.bind(this)
    this.updateData = this.updateData.bind(this)
  }
  componentDidMount(){ this.updateData() }
  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({loading: true}, this.updateData)
    }
  }
  // Call out to keychn appi and refresh directory
  updateData() {
    const { recipes, searchFilter } = this.state
    //filter function
    const filter = searchFilter !== '' && (e => e.recipe.description.match(new RegExp(searchFilter))) // CHECK!

    json = recipe.filter(filter)

    if (recipes.length == 0) {
      this.setState({recipes: json})
    }
    return json
    // this.setState({
    //   loading: false,
    //   recipes: data
    // }, this.props.onComponentRefresh)

  }
  // after the content has refreshed, we want to reset the loading variable
  onComponentRefresh() {
    this.setState({ loading: false })
  }
  handleSearch(val) {
    // handle the search
    this.setState({
      searchFilter: val,
      loading: true
    })
  }
  render() {
    const { loading, recipes } = this.state
    return (
      <RecipeList
        requestRefresh={loading}
        onComponentRefresh={this.onComponentRefresh}
        fetchData={this.updateData}
      />
    )
  }
}
