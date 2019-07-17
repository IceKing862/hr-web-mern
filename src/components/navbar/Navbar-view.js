import React from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import useStyles from './Navbar-styles'

export default function Nav({ scroll }) {
    const classes = useStyles()

    return (
        <Navbar className={`${scroll ? classes.rootScroll : classes.root }`} fixed="top" expand="">
            <Navbar.Brand>
                <Link to="/" className={`${scroll ? classes.linkScroll : classes.link}`} onClick={() => window.scrollTo(0, 0)}>
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
            <Navbar.Toggle className={`${scroll ? classes.toggleScroll : classes.toggle}`}>
                <i className="fas fa-bars"></i>
            </Navbar.Toggle>
        </Navbar>
    )
}