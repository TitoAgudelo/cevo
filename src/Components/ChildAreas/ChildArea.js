import React from 'react'

class ChildArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: null
    }
  }

  render () {
    const { match } = this.props;
    return (
      <div><h1>Child Area {match.params.id}</h1></div>
    )
  }
}

export default ChildArea
