import React from 'react'

class SubArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: null
    }
  }

  render () {
    const { match } = this.props;
    return (
      <div><h1>Sub Area {match.params.id}</h1></div>
    )
  }
}

export default SubArea
