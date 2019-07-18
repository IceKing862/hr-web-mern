import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        zIndex: 1000,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '3rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        transition: 'all ease-in-out 0.3s',
    },
})

export default function BlackScreen({ active, handleChangeActive, children }) {
    const classes = useStyles()
    const styles = {
        root: {
            left: active ? 0 : '-100vw'
        },
    }

    return (
        <div className={`${classes.root}`} style={styles.root} onClick={handleChangeActive}>
            {children}
        </div>
    )
}