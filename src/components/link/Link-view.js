import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

function Link({ location, path, custom, children, active = false }) {

    const handleClick = () => {
        location.pathname === path ? animateScroll.scrollToTop() : window.scrollTo(0, 0) 
    }

    const matchEvent = () => {
        return location.pathname === path
    }

    const activeStyles = active && {
        color: '#870000'
    }
    
    return (
        <NavLink
            to={path || ''}
            onClick={handleClick}
            className={custom}
            activeStyle={activeStyles || {}}
            isActive={matchEvent}
        >
            {children}
        </NavLink>
    )
}

export default withRouter(Link)