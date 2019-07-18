import React from 'react'
import { Link } from 'react-scroll'

export default function Scroller({ path, custom, children }) {
    return (
        <Link
            to={path || 'root'}
            spy={true}
            smooth={true}
            offset={-20}
            duration={500} 
            className={custom}
        >
            {children}
        </Link>
    )
}