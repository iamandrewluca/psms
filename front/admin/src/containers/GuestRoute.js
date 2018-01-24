import React from 'react'
import {Redirect, Route} from "react-router"

const GuestRoute = ({isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )} />
)

export default GuestRoute
