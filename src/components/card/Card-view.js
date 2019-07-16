import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal';
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import useStyles from './Card-styles' 

export default function Card({ title, text, imgSrc }) {
    const classes = useStyles()

    return (
        <Col className={classes.root} xs={12} md={6} lg={4}>
            <Fade>
                <Link to="/productos" className={classes.link}>
                    <div className={classes.imgBox}>
                        <img src={imgSrc} alt={title} />
                    </div>
                    <h3 className="h5 text-dark mb-3">
                        {title}
                    </h3>
                    <p className="text-secondary mb-5 px-3">
                        {text}
                    </p>
                </Link>
            </Fade>
        </Col>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
}