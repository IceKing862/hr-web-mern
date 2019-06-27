import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { signin } from './../../util/auth/auth-api'
import auth from './../../util/auth/auth-helper'
import View from './login-view'

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        redirectToReferrer: false
    }

    handleClick = () => {
        const user = {
            username: this.state.username || undefined,
            password: this.state.password || undefined
        }

        signin(user).then(data => {
            if (data.token) {
                auth.authenticate(data.token, () => {
                    this.setState({ redirectToReferrer: true })
                })
            }
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    render() {
        const { redirectToReferrer } = this.state
        if (redirectToReferrer) {
            return (
                <Redirect to="/dashboard" />
            )
        }

        return (
            <View
                username={this.state.username}
                password={this.state.password}
                handleClick={this.handleClick} 
                handleChange={this.handleChange}
            />
        )
    }
}

export default Login