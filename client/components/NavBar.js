import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div className="flex-container horizontal-container nav-container">
        <div className="logo">
          <NavLink to="/">Prep Talk</NavLink>
        </div>
        <nav>
          {isLoggedIn ? this.renderLoggedOutNav() : this.renderLoggedInNav()}
        </nav>
      </div>
    )
  }

  renderLoggedInNav = () => {
    return (
      <ul>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
      </ul>
    )
  }

  renderLoggedOutNav = () => {
    return (
      <ul>
        <li><NavLink to="/" onClick={(event) => this.props.handleClick()}>Logout</NavLink></li>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
