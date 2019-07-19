import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './../../routes/home'
import Catalog from './../../routes/catalog'
import About from './../../routes/about'
import Contact from './../../routes/contact'
import Signin from './../../routes/signin'
import Dashboard from './../../routes/dashboard'
import PrivateDashboard from './../../routes/dashboard/PrivateRoute'
import FloatingButton from './../floatingButton'
import Navbar from './../navbar'
import Menu from './../menu'
import Footer from './../footer'

function App() {
  const [scroll, setScroll] = React.useState(false)
  const [active, setActive] = React.useState(false)

  const handlescroll = () => {
    if(window.scrollY) {
        setScroll(true)
    } else {
        setScroll(false)
    }
  }
  const handleChangeActive = () => {
    setActive(!active)
  }

  React.useEffect(() => {
    window.onscroll = () => {
      handlescroll()
    }
    handlescroll()
  }, [])

  return (
    <SnackbarProvider maxSnack={3}>

      <div className="App">
        <Navbar
          scroll={scroll}
          handleChangeActive={handleChangeActive}
        />
        <Menu
          active={active}
          handleChangeActive={handleChangeActive}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalogo" component={Catalog} />
          <Route path="/quienes-somos" component={About} />
          <Route path="/contactanos" component={Contact} />
          <Route path="/login" component={Signin} />
          <PrivateDashboard path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
        <FloatingButton scroll={scroll} />
      </div>
    </SnackbarProvider>
  );
}

export default App;
