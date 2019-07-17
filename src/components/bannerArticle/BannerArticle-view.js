import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useStyles from './BannerArticle-styles'

export default function Article() {
    const classes = useStyles()

    return (
        <Container>
            <Row>
                <Col xs={12} sm={10} md={8} lg={6} className={classes.root}>
                    <h1 className={`display-4 ${classes.title}`}>
                        Contáctanos
                    </h1>
                    <hr className="my-4 bg-light w-100" />
                    <p className="lead pb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}