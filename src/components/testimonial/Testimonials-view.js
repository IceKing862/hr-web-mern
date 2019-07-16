import React from 'react'
import Fade from 'react-reveal/Fade'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import useStyles from './Testimonials-styles'

export default function Testimonials({ text, name, imgSrc }) {
    const classes = useStyles()

    return (
        <Col xs={12} md={6} lg={4} className="mb-5 pb-5 text-left">
            <Fade>
                <Card className={classes.root}>
                    <i className={`fas fa-quote-left ${classes.quote}`}></i>
                    <Card.Body className={classes.body}>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}{text}{' '}
                            </p>
                        </blockquote>
                        <footer className="blockquote-footer">
                            {name}
                        </footer>
                    </Card.Body>
                    <img src={imgSrc} alt={name} className={classes.img} />
                </Card>
            </Fade>
        </Col>
    )
}