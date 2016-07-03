import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'
import { logIn } from './reducer';
import { push } from 'react-router-redux'

export class LoginContainer extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {username: "admin", password: "admin"};
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.login.loggedIn) {
      this.props.redirectToLoginSuccess(nextProps.location.state.nextPathname);
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ "username" : e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({ "password" : e.target.value });
  }

  handleLogin = () => {
    this.props.logIn(this.state.username, this.state.password);
  }

  getValidationState = () => {
    if (this.props.login.loginError) {
      return "error";
    } else {
      return null;
    }
  }

  render () {

    var loginErrorMessage;
    if (this.props.login.loginError) {
      loginErrorMessage = (
        <Alert bsStyle="danger">Login error: {this.props.login.loginErrorMessage}</Alert>
      );
    }

    return (
      <div className='container'>
        <h1>Login</h1>
        { loginErrorMessage }
        <form>
          <FormGroup controlId="username" validationState={this.getValidationState()}>
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" onChange={this.handleUsernameChange} value={this.state.username}></FormControl>
          </FormGroup>
          <FormGroup controlId="password" validationState={this.getValidationState()}>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.handlePasswordChange} value={this.state.password}></FormControl>
          </FormGroup>
          <Button onClick={this.handleLogin}>Log In</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.reports.login
})

export default connect(mapStateToProps, {
  logIn,
  redirectToLoginSuccess: (redirectUrl) => push(redirectUrl)
})(LoginContainer)
