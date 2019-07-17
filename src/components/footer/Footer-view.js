import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import useStyles from './Footer-styles'

export default function Footer() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Container className={classes.root}>
                <Row>
                    <Col xs={12} className="my-5 p-5 text-center">
                        <h2 className={classes.title}>Dale personalidad a tu oficina</h2>
                        <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print</p>
                        <h2 className={classes.title}>boton</h2>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row className="mb-5">
                    <Col className="text-center text-lg-left" xs={12} lg={6}>
                        <div className={classes.box}>
                            <Link className={classes.link} to="/">Inicio</Link>{'  /  '}
                            <Link className={classes.link} to="/catalogo">Catalogo</Link>{'  /  '}
                            <Link className={classes.link} to="/quienes-somos">Quienes somos</Link>{'  /  '}
                            <Link className={classes.link} to="/contactanos">Contactanos</Link>
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
                            © 2018-2019 <Link to="/" className={classes.logo}>H&#038;R</Link>, Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}