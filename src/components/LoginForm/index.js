// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errMessage: '', isLoginFailure: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const responseData = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      const formattedData = {
        statusCode: responseData.status_code,
        errorMsg: responseData.error_msg,
      }
      console.log(formattedData)
      this.setState({errMessage: formattedData.errorMsg, isLoginFailure: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
          className="password-field"
        />
      </>
    )
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
          className="user-name-field"
        />
      </>
    )
  }

  render() {
    const {errMessage, isLoginFailure} = this.state

    return (
      <div className="nxt-trendz-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="website-login-lg-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nxt-trendz-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="website-login-sm-img"
            alt="website login"
          />
          <div className="input-container">{this.renderUserName()}</div>
          <div className="input-container">{this.renderPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {isLoginFailure ? (
            <p className="error-message">{`*${errMessage}`}</p>
          ) : (
            ''
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
