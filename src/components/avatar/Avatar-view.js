import React from 'react'
import useStyles from './Avatar-styles'
import Col from 'react-bootstrap/Col'

export default function Avatar({ left, mid, right }) {
    const props = {
        left: `url("${left.imgSrc1}")`,
        mid: `url("${mid.imgSrc1}")`,
        right: `url("${right.imgSrc1}")`,
    }
    const classes = useStyles(props)
    
    return (
        <Col xs={12} className={classes.root}>
            <div className={classes.img}>
                <div className={classes.details}>
                    <p className="h5 mt-2 mb-0">{left.name}</p>         
                    <p className="lead mb-3">{left.job}</p>
                </div>
            </div>
            <div className={classes.img}>
                <div className={classes.details}>
                    <p className="h5 mt-2 mb-0">{mid.name}</p>         
                    <p className="lead mb-3">{mid.job}</p>
                </div>
            </div>
            <div className={classes.img}>
                <div className={classes.details}>
                    <p className="h5 mt-2 mb-0">{right.name}</p>         
                    <p className="lead mb-3">{right.job}</p>
                </div>
            </div>         
        </Col>
    )
}