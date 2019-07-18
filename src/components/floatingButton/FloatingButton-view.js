import React from 'react'
import { withRouter } from 'react-router-dom'
import Link from './../link'
import useStyles from './FloatingButton-styles'

function FloatingButton({ location, scroll }) {
    const classes = useStyles()

    return (
        <React.Fragment>
            {scroll &&
                <Link
                    path={location.pathname}  
                >
                    <div className={classes.root}>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                </Link>
            }
        </React.Fragment>
    )
}

export default withRouter(FloatingButton)