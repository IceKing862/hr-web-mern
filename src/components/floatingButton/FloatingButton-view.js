import React from 'react'
import { Link, animateScroll } from 'react-scroll'
import useStyles from './FloatingButton-styles'

export default function FloatingButton() {
    const classes = useStyles()

    const handleClick = () => {
        animateScroll.scrollToTop()
    }

    return (
        <React.Fragment>
            <Link
                className={classes.root}
                onClick={() => handleClick()}
            >
                <i className="fas fa-chevron-up"></i>
            </Link>
        </React.Fragment>
    )
}