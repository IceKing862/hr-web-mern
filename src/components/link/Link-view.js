import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

function Link({ location, path, styles, children, activeBehavior = false, cb}) {

    const handleClick = () => {
        location.pathname === path ? animateScroll.scrollToTop() : window.scrollTo(0, 0)
        cb && cb()
    }

    const matchEvent = () => {
        return location.pathname === path
    }

    const activeStyles = activeBehavior && {
        color: '#ff5722',
    }
    
    return (
        <NavLink
            to={path || ''}
            onClick={handleClick}
            className={styles}
            activeStyle={activeStyles || {}}
            isActive={matchEvent}
        >
            {children}
        </NavLink>
    )
}

export default withRouter(Link)