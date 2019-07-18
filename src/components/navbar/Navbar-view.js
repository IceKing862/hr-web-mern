import React from 'react'
import { Fade } from 'react-reveal'
import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import useStyles from './Navbar-styles'
import Link from './../link'

function Nav({ scroll, location }) {
    const classes = useStyles()

    return (
        <React.Fragment>
            {(location.pathname === '/signin' || location.pathname === '/dashboard') ? '' : (
                <Navbar className={`${scroll ? classes.rootScroll : classes.root }`} fixed="top" expand="">
                    <Navbar.Brand>
                        <Link path="/" custom={`${scroll ? classes.linkScroll : classes.link}`}>
                            <Fade>
        
                                {scroll ? (
                                        <img className={classes.brand} src="./static/media/logoTrans.png" alt="logo" />
                                    ) : (
                                        <span>H&#38;R, </span>
                                    )
                                }
                                <span className="d-none d-md-inline">
                                    Papelera, Suministros y Servicios.
                                </span>
                            </Fade>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className={`${(scroll || location.pathname === '/quienes-somos') ? classes.toggleScroll : classes.toggle}`}>
                        <i className="fas fa-bars"></i>
                    </Navbar.Toggle>
                </Navbar>
            )}
        </React.Fragment>
    )
}

export default withRouter(Nav)