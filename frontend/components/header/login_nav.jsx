import React from 'react'
import { connect } from 'react-redux'
import { revealModalLogin, revealModalSignup } from '../../actions/modal_actions'

class LoginNav extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.revealModalLogin()
  }

  handleSignup(e) {
    e.preventDefault()
    this.props.revealModalSignup()
  }

  render () {
    return (
      <nav className="header-nav">
        <button
          className="header-button"
          onClick={this.handleLogin.bind(this)}>
          Log In
        </button>
        <button
          className="header-button"
          onClick={this.handleSignup.bind(this)}>
          Get Started
        </button>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    revealModalLogin: () => dispatch(revealModalLogin()),
    revealModalSignup: () => dispatch(revealModalSignup())
  }
}

export default connect(
  null, mapDispatchToProps
)(LoginNav)
