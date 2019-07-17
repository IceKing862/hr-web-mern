import React from 'react'
import useStyles from './SocialButton-styles'

export default function SocialButton({ path, icon, title }) {
    const classes = useStyles()
    
    return (
        <a href={path} className={classes.root} title={title} target="_blank" rel="noopener noreferrer">
            <i className={icon} aria-hidden="true"></i>
        </a>
    )
}