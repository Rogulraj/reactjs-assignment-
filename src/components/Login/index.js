import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import AppContext from '../../context'

import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginLabelText,
  LoginInput,
  DivContainer,
  ShowPassword,
  LoginButton,
  ErrorMessage,
} from './styledComponent'

export default class Login extends Component {
  state = {isShowPassword: false, username: '', password: '', errorMsg: null}

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))
  }

  onChangeUserName = event => {
    const {value} = event.target
    this.setState({
      username: value,
    })
  }

  onChangePassword = event => {
    const {value} = event.target
    this.setState({
      password: value,
    })
  }

  onSubmitTriggered = async event => {
    event.preventDefault()

    const {username, password} = this.state
    console.log(username, password)

    const userDetails = {username, password}
    const postUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(postUrl, options)

    if (response.ok) {
      const fetchCredentialData = await response.json()
      const jwtToken = fetchCredentialData.jwt_token

      this.setState({
        errorMsg: null,
      })

      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 1})
      history.replace('/')
    } else {
      const fetchCredentialData = await response.json()
      const errorMessage = fetchCredentialData.error_msg

      this.setState({
        errorMsg: errorMessage,
      })
    }
  }

  render() {
    const {isShowPassword, username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <LoginContainer bgColor={theme ? '#181818' : '#ffffff'}>
              <LoginForm
                onSubmit={this.onSubmitTriggered}
                shadow={theme}
                bgColor={theme ? '#0f0f0f' : '#ffffff'}
              >
                <LoginLogo
                  src={
                    theme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <DivContainer mt={30}>
                  <LoginLabelText htmlFor="username">USERNAME</LoginLabelText>
                  <LoginInput
                    id="username"
                    placeholder="Username"
                    type="text"
                    onChange={this.onChangeUserName}
                    value={username}
                  />
                </DivContainer>
                <DivContainer mt={30}>
                  <LoginLabelText htmlFor="password">PASSWORD</LoginLabelText>
                  <LoginInput
                    id="password"
                    placeholder="Password"
                    type={isShowPassword ? 'text' : 'password'}
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </DivContainer>
                <DivContainer mt={20} di="flex" fd="row" ai="center" mr="auto">
                  <ShowPassword
                    onChange={this.onChangeShowPassword}
                    value={isShowPassword}
                    id="show-password"
                    type="checkbox"
                  />
                  <LoginLabelText htmlFor="show-password">
                    Show Password
                  </LoginLabelText>
                </DivContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMsg === null ? null : (
                  <ErrorMessage>{`*${errorMsg}`}</ErrorMessage>
                )}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
