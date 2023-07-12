import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  getUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  getSubmittedResult = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    if (
      (username === 'rahul' && password === '') ||
      (username === '' && password !== '') ||
      (username !== 'rahul' && password !== 'rahul@2021') ||
      (username === 'rahul' && password !== 'rahul@2021')
    ) {
      const errorMsg = "* Username and Password didn't matched"
      this.setState({
        errorMsg,
      })
    }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    // const data = await response.json()
    if (response.ok === true) {
      this.getSubmittedResult()
    }
  }

  renderLoginForm = () => {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <form onSubmit={this.submitForm}>
          <label htmlFor="username" className="input-label">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Username"
            onChange={this.getUsername}
            value={username}
          />
          <br />
          <label htmlFor="password" className="input-label">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Password"
            onChange={this.getPassword}
            value={password}
          />
          <br />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p className="login-error-msg">{errorMsg}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="login-form-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-website-img"
        />
        {this.renderLoginForm()}
      </div>
    )
  }
}
export default LoginForm
