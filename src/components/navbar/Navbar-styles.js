import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root: {
        height: 66,
        backgroundColor: 'transparent',
        transition: 'all 0.5s ease-in-out',
    },
    rootScroll: {
        height: 66,
        borderBottom: '1px solid #009688',
        backgroundColor: 'white',
    },
    link: {
        color: '#eeeeee',
        '&:hover': {
            color: 'white',
            textDecoration: 'none',
        }
    },
    linkScroll: {
        color: '#455a64',
        '&:hover': {
            color: '#000000',
            textDecoration: 'none',
        }
    },
    toggle: {
        border: 'none',
        transition: 'all 0.5s ease-in-out',
        '& i': {
            color: '#eeeeee',
        },
        '&:hover i': {
            color: 'white',
            textDecoration: 'none',
        }
    },
    toggleScroll: {
        border: 'none',
        transition: 'all 0.5s ease-in-out',
        '& i': {
            color: '#455a64',
        },
        '&:hover i': {
            color: '#000000',
            textDecoration: 'none',
        }
    },
    brand: {
        height: 40,
        marginRight: '0.5rem',
        transition: 'all 0.5s ease-in-out',
    }
})