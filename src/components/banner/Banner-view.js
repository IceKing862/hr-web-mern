import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from 'react-bootstrap/Container'

const useStyles = makeStyles({
    root: {
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
    },
})

export default function Banner({ image = '', children }) {
    const classes = useStyles()

    return (
        <Container fluid={true} className={classes.root} style={{ backgroundImage: image }}>
            {children}
        </Container>
    )
}