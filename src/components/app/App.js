import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './../../routes/home'
import Signin from './../../routes/signin'
import Dashboard from './../../routes/dashboard'
import PrivateDashboard from './../../routes/dashboard/PrivateRoute'
import FloatingButton from './../floatingButton'
import Navbar from './../navbar'
import Footer from './../footer'

function App() {
  const [scroll, setScroll] = React.useState(false)

  const handlescroll = () => {
    if(window.scrollY) {
        setScroll(true)
    } else {
        setScroll(false)
    }
  }

  React.useEffect(() => {
    window.onscroll = () => {
      handlescroll()
    }
  }, [])

  return (
    <SnackbarProvider maxSnack={3}>

      <div className="App">
        <Navbar scroll={scroll} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <PrivateDashboard path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
        <FloatingButton scroll={scroll} />
      </div>
    </SnackbarProvider>
  );
}

export default App;
