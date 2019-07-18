import React from 'react'
import Link from './../link'
import BlackScreen from './../blackScreen'
import useStyles from './Menu-styles'

const links = [
    { path: '/', text: 'Inicio'},
    { path: '/catalogo', text: 'Catalogo'},
    { path: '/quienes-somos', text: 'Quienes somos'},
    { path: '/contactanos', text: 'Contactanos'}
]

export default function Menu({ active, handleChangeActive }) {
    const classes = useStyles()

    return (
        <BlackScreen active={active} handleChangeActive={handleChangeActive}>
            <div className="d-flex flex-column text-center">
                {links.map((link, index) => 
                    <Link
                        key={index}
                        path={link.path}
                        styles={classes.link}
                        activeBehavior={true}
                        cb={handleChangeActive}
                    >
                        {link.text}
                    </Link>
                )}
            </div>
        </BlackScreen>
    )
}