import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useStyles from './DoubleColumn-styles'

export default function DobleColumn({ icon, title, text, imgSrc, left = true }) {
    const classes = useStyles()

    return (
        <Row>
            <Col
                xs={12} lg={{ span: 6, offset: `${left ? 0 : 1}` }}
                className={`${left ? 'order-0' : 'order-md-1'} ${classes.background}`}
                style={{backgroundImage: imgSrc}}
            >
            </Col>
            <Col xs={12} md={8} lg={{ span: 4, offset: 1 }}
                className={`${classes.article}`}
            >
                <i className={`${icon}`} style={{fontSize: "48px"}}></i>
                <h2 className="display-4 mb-3">
                    {title}
                </h2>
                <p className="mb-5 lead text-secondary text-justify">
                    {text}
                </p>
            </Col>
        </Row>
    )
}