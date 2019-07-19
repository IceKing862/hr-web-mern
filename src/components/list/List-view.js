import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from './../card'
import Testimonial from './../testimonial'
import Example from './../examples'
import Avatar from './../avatar'

export default function List({ data, title, text, type }) {
    const styles = {
        backgroundColor: type === 'avatar' && '#c62828'
    }
    
    return (
        <Container fluid={type === 'avatar'} className="py-5 my-5" style={styles}>
            <Row className="text-center d-flex justify-content-center">
                <Col xs={12} className={`mb-5 ${type === 'avatar' && 'text-white'}`}>
                    <h2 className="display-4 mb-2">
                        {title}
                    </h2>
                    <p className={`lead mb-5 pb-2 ${type !== 'avatar' && 'text-secondary'}`}>
                        {text}
                    </p>
                </Col>

                {data.map((item, index)=> type === 'card' ? (
                        <Card key={index} {...item} />
                    ) : ((type === 'testimonial') ? (
                        <Testimonial key={index} {...item} />
                    ) : ((type === 'example') ? (
                        <Example key={index} {...item} />
                    ) : ((type === 'avatar') ? (
                        <Avatar key={index} {...item}  />
                    ) : (
                        ''
                    ))))
                )}
            </Row>
        </Container>
    )
}