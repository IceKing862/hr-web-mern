import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Signin from './../../routes/signin'
import Dashboard from './../../routes/dashboard'
import PrivateDashboard from './../../routes/dashboard/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={Signin} />
        <PrivateDashboard path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
