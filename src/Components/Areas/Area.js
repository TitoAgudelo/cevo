import React from 'react'

class Area extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null
    }
  }

  render () {
    const { match } = this.props;
    return <div><h1>Area {match.params.id}</h1></div>
  }
}

export default Area
