import React from 'react'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from './../link'
import useStyles from './Footer-styles'

const links = [
    { path: '/', text: 'Inicio'},
    { path: '/catalogo', text: 'Catalogo'},
    { path: '/quienes-somos', text: 'Quienes somos'},
    { path: '/contactanos', text: 'Contactanos'}
]

function Footer({ location }) {
    const classes = useStyles()

    return (
        <React.Fragment>
        {(location.pathname === '/login' || location.pathname === '/dashboard') ? '' : (
            <React.Fragment>

                <Container fluid={true} className={classes.root}>
                    <Row>
                        <Col xs={12} className="my-5 p-5 text-center">
                            <h2 className={classes.title}>
                                Dale personalidad a tu oficina
                            </h2>
                            <p className={classes.text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print
                            </p>
                            <h2 className={`${classes.title} pt-5`}>
                                <Link path="/catalogo" styles={classes.button}>
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
                                {links.map((link, index) =>
                                    <React.Fragment key={index}>
                                        <Link path={link.path} styles={classes.link} activeBehavior={true}>
                                            {link.text}
                                        </Link>
                                        {index !== links.length -1 && <span className={classes.slash}>  /  </span>}
                                    </React.Fragment>
                                )}
                            </div>
                            <p className={classes.box}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print
                            </p>
                            <div className={classes.box}>
                                <a
                                    href='https://www.facebook.com/'
                                    title='Siguenos en Facebook'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fab fa-facebook ${classes.icon}`}></i>
                                </a>
                                <a
                                    href='https://www.instagram.com/?hl=es-la'
                                    title='Siguenos en Instagram'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fab fa-instagram ${classes.icon}`}></i>
                                </a>
                            </div>
                        </Col>
                        <Col className="text-center text-lg-right" xs={12} lg={6}>
                            <img className="mb-4" src="./static/media/logo.jpg" alt="logo" height="60px" />
                            <p className={classes.box}>
                                © 2018-2019 
                                <Link path="/" styles={classes.logo}> H&#38;R</Link>
                                , Todos los derechos reservados.
                                <br/>
                                Photos by rawpixel.com from Pexels
                                <br/>
                                ¿Te gusta esta Web?
                                <a
                                    className={classes.follow}
                                    href='https://www.instagram.com/?hl=es-la'
                                    title='Siguenos'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > Siguenos</a>
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