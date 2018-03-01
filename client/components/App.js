import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { NavBar, Home, Login, Signup, MotivationView, Footer } from '../components'
import { me } from '../store'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.loadUser()
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <div className="flex-container outer-container vertical-container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />

          {/* Displays the MotivationView component only to loggedin users */}
          {isLoggedIn && <Route path="/motivationview" component={ MotivationView } />}

          {/* Displays the Home component as a fallback if no route path match is found */}
          <Route component={ Home } />
        </Switch>
        <Footer />
      </div>
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
    loadUser() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
