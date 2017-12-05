import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { navBar } from './../Api/Api'
import './Nav.scss'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount () {
    navBar()
      .then(response => response.json())
      .then(data => {
        const items = data
        this.setState({ items })
      })
      .catch(err => console.log('err', err))
  }

  navBarItemsHover (items) {
    return (
      items.map((item, key) => {
        if(item.childs) {
          return (
            <li className="nav-item dropdown-submenu" key={item.id}>
              <Link to={item.path} className="nav-link dropdown-toggle" data-toggle="dropdown">{item.name}</Link>
              <ul className="dropdown-menu">
                {this.navBarItemsHover(item.childs)}
              </ul>
            </li>
          )
        } else {
          return (
            <li className="nav-item" key={item.id}>
              <Link className="nav-link" to={item.path}>{item.name}</Link>
            </li>
            )
          }
        }
      )
    )
  }

  navBarItems (items) {
    return (
      items.map((item, key) => {
          if(item.childs) {
            return (
              <li className="nav-item" key={item.id}>
                <Link to={item.path} className="nav-link dropdown-toggle" id={item.id} role="button" data-toggle="dropdown">{item.name} <b className="caret"></b></Link>
                <ul className="dropdown-menu multi-level">
                  {this.navBarItemsHover(item.childs)}
                </ul>
              </li>
            )
          } else {
            return (
              <li className="nav-item" key={item.id}>
                <Link className="nav-link" to={item.path}>{item.name}</Link>
              </li>
            )
          }
        }
      )
    )
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.navBarItems(this.state.items)}
          </ul>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {}

export default Navbar
