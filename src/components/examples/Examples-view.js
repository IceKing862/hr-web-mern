import React from 'react'
import Fade from 'react-reveal/Fade'
import Col from 'react-bootstrap/Col'

export default function Testimonials({ name, imgSrc }) {

    return (
        <Col xs={12} md={6} lg={4} className="p-1 d-flex justify-content-center">
            <Fade>
                <img src={imgSrc} alt={name} style={{ width: '100%' }} />
            </Fade>
        </Col>
    )
}