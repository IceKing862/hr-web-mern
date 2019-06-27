import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './../../util/auth/auth-helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticate() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

export default PrivateRoute