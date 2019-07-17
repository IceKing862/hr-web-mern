import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: 128,
        height: 128,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 20px 20px 0',
    },
    img : {
        maxWidth: 180,
        maxHeight: '100%',
    }
})

export default function Supplier({ title, imgSrc }) {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <img src={imgSrc} className={`${classes.img}`} alt={title} />
        </div>
    )
}