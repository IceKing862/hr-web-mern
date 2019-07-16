import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './../../routes/home'
import Signin from './../../routes/signin'
import Dashboard from './../../routes/dashboard'
import PrivateDashboard from './../../routes/dashboard/PrivateRoute'
import FloatinButton from './../floatingButton'

function App() {
  return (
    <SnackbarProvider maxSnack={3}>

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <PrivateDashboard path="/dashboard" component={Dashboard} />
        </Switch>
        <FloatinButton />
      </div>
    </SnackbarProvider>
  );
}

export default App;
