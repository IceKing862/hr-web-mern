import React from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from './../link'
import useStyles from './Footer-styles'

function Footer({ location }) {
    const classes = useStyles()

    return (
        <React.Fragment>
        {(location.pathname === '/signin' || location.pathname === '/dashboard') ? '' : (
            <React.Fragment>

                <Container fluid={true} className={classes.root}>
                    <Row>
                        <Col xs={12} className="my-5 p-5 text-center">
                            <h2 className={classes.title}>Dale personalidad a tu oficina</h2>
                            <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print</p>
                            <h2 className={`${classes.title} pt-5`}>
                                <Link path="/catalogo" custom={classes.button}>
                                    Catalogo
                                </Link>
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <Row className="mb-5">
                        <Col className="text-center text-lg-left" xs={12} lg={6}>
                            <div className={classes.box}>
                                <Link path="/" custom={classes.link} active={true}>
                                    Inicio
                                </Link>{'  /  '}
                                <Link path="/catalogo" custom={classes.link} active={true}>
                                    Catalogo
                                </Link>{'  /  '}
                                <Link path="/quienes-somos" custom={classes.link} active={true}>
                                    Quienes somos
                                </Link>{'  /  '}
                                <Link path="/contactanos" custom={classes.link} active={true}>
                                    Contactanos
                                </Link>
                            </div>
                            <p className={classes.box}>
                                Photos by rawpixel.com from Pexels
                                ¿Te gusta esta Web?
                            </p>
                            <div className={classes.box}>
                                <a href='https://www.facebook.com/' title='Siguenos en Facebook' target="_blank" rel="noopener noreferrer">
                                    <i className={`fab fa-facebook ${classes.icon}`}></i>
                                </a>
                                <a href='https://www.instagram.com/?hl=es-la' title='Siguenos en Instagram' target="_blank" rel="noopener noreferrer">
                                    <i className={`fab fa-instagram ${classes.icon}`}></i>
                                </a>
                            </div>
                        </Col>
                        <Col className="text-center text-lg-right" xs={12} lg={6}>
                            <p className={classes.box}>
                                © 2018-2019 <Link path="/" custom={classes.logo}>H&#38;R</Link>, Todos los derechos reservados.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )}
        </React.Fragment>
    )
}

export default withRouter(Footer)