import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Link from "./../link";
import useStyles from './ButtonGroup-style'

export default function Group({ left, right }) {
    const classes = useStyles()
    
    return (
        <div className="d-flex flex-column">

        <ButtonGroup size="lg" className="mt-3">
            <Button className={classes.buttonLeft}>
                <Link path={left.path} styles={classes.text} >
                    {left.text}
                    <i className="ml-2 d-none d-md-inline fas fa-chevron-circle-down"></i>
                </Link>
            </Button>
            <Button className={classes.buttonRight}>
                <Link path={right.path} styles={classes.text} >
                    {right.text}
                    <i className="ml-2 d-none d-md-inline fas fa-chevron-circle-right"></i>
                </Link>
            </Button>
        </ButtonGroup>
        </div>
    )
}