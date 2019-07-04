import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Signin from './../../routes/signin'
import Dashboard from './../../routes/dashboard'
import PrivateDashboard from './../../routes/dashboard/PrivateRoute'

function App() {
  return (
    <SnackbarProvider maxSnack={3}>

      <div className="App">
        <Switch>
          <Route path="/signin" component={Signin} />
          <PrivateDashboard path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </SnackbarProvider>
  );
}

export default App;
