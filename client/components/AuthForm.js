import React, { Component } from 'react'
import { connect } from 'react-redux'
import { auth } from '../store'
import { Card, CardActions, CardTitle, CardText, FlatButton, TextField } from 'material-ui'


class AuthForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const key = event.target.name
    const value = event.target.value

    this.setState({ [key]: value })
  }

  render() {
    const { name, displayName, handleSubmit, error } = this.props
    let disableButton = (!this.state.email.length || !this.state.password.length) ? true : false
    const greeting = displayName === 'Login' ? 'Welcome back' : 'Hi there'

    return (
      <div>
        <Card className="auth-card">
          <CardTitle titleColor="#0e254c" titleStyle={{"fontWeight": "bold", "textAlign": "center"}} title={greeting} />
          <CardText>
          <div>
            <TextField
              inputStyle={{color: "#0E254C", WebkitBoxShadow: '0 0 0 1000px white inset'}}
              underlineFocusStyle={{ borderColor: "#C98E34"}}
              floatingLabelFocusStyle={{color: "#C98E34"}}
              fullWidth={true}
              name="email"
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              inputStyle={{color: "#0E254C", WebkitBoxShadow: '0 0 0 1000px white inset'}}
              underlineFocusStyle={{ borderColor: "#C98E34"}}
              floatingLabelFocusStyle={{color: "#C98E34"}}
              fullWidth={true}
              name="password"
              type="password"
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {error && error.response && <div> {error.response.data} </div>}
          </CardText>
          <CardActions>
          <div>
            <FlatButton
              style={{"marginBottom": "10px", "color": "#0e254c", "border": "1px solid #0e254c"}}
              fullWidth={true}
              backgroundColor="#f0ddd4"
              hoverColor= "rgb(204,242,218)"//"rgb(204,242,218)"
              label={displayName}
              secondary={true}
              onClick={evt => handleSubmit(evt, name, this.state.email, this.state.password)}
            />
          </div>
          <div style={{"textAlign": "center", "fontSize": "0.75em"}}>
            <a className="gAuth-link" href="/auth/google">{`${displayName} with Google`}</a>
          </div>
          </CardActions>
        </Card>
      </div>
    )
  }
}


const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt, formName, email, password) {
      console.log(evt, formName, email, password)
      evt.preventDefault()
      if (email.length && password.length) dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
