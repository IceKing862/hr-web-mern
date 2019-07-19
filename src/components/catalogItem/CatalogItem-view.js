import React from 'react'
import Col from 'react-bootstrap/Col'
import useStyles from './CatalogItem-styles'

export default function CatalogItem({ image }) {
    const classes = useStyles()

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="px-0">
            <div className={classes.root}>
                <img src={`http://localhost:3000/${image}`} alt={image} className={classes.img} />
            </div>
        </Col>
    )
}