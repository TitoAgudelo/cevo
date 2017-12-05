import React from 'react'

class Category extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: null
    }
  }

  render () {
    const { match } = this.props;
    return (
      <div><h1>Category {match.params.id}</h1></div>
    )
  }
}

export default Category
