import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Testimonial from './../testimonial'
import Card from './../card'

export default function List({ data, title, text, type }) {
    return (
        <Container className="py-5 my-5">
            <Row className="text-center d-flex justify-content-center">
                <Col xs={12} className="mb-5">
                    <h2 className="display-4 mb-2">
                        {title}
                    </h2>
                    <p className="lead text-secondary mb-5 pb-2">
                        {text}
                    </p>
                </Col>

                {data.map((item, index)=> type === 'card' ? (
                        <Card key={index} {...item} />
                    ) : ((type === 'testimonial') ? (
                        <Testimonial key={index} {...item} />
                    ) : (
                        ''
                    )))}        
            </Row>
        </Container>
    )
}