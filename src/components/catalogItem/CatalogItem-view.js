import React from 'react'
import Col from 'react-bootstrap/Col'
import useStyles from './CatalogItem-styles'

export default function CatalogItem({ image }) {
    const props = { backgroundImage: `url("${image}")` }
    const classes = useStyles(props)

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="px-0">
            <div className={classes.root}></div>
        </Col>
    )
}