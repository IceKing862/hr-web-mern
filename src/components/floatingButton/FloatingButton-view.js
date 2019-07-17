import React from 'react'
import { Link, animateScroll } from 'react-scroll'
import useStyles from './FloatingButton-styles'

export default function FloatingButton({ scroll }) {
    const classes = useStyles()

    const handleClick = () => {
        animateScroll.scrollToTop()
    }

    return (
        <React.Fragment>
            {scroll &&
                <Link
                    to=""
                    className={classes.root}
                    onClick={() => handleClick()}
                >
                    <i className="fas fa-chevron-up"></i>
                </Link>
            }
        </React.Fragment>
    )
}