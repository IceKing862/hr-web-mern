import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root: {
        marginBottom: '3rem',
        backgroundColor: '#004ba0',
    },
    title: {
        fontSize: 28,
        color: 'white',
        margin: '20px 0'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.5)',
    },
    box: {
        fontSize: 14,
        color: '#999999',
        marginBottom: 20,
    },
    logo: {
        color: '#002f6c',
    },
    link: {
        color: '#002f6c',
        transition: '0.3s',
        '&:hover': {
            color: '#0077c2',
            textDecoration: 'none'
        }
    },
    button:{
        padding: '0.5rem 1rem',
        border: '3px solid white',
        color: 'white',
        transition: '0.3s',
        '&:hover': {
            border: '4px solid rgba(255, 255, 255, 1)',
            color: 'white',
            textDecoration: 'none'
        }
    },
    icon: {
        fontSize: 28,
        marginRight: 10,
        color: '#002f6c',
        transition: '0.3s',
        '&:hover': {
            color: '#0077c2',
            textDecoration: 'none'
        }
    },
    follow: {
        color: '#6a1b9a',
        fontWeight: 'bolder',
        transition: '0.3s',
        '&:hover': {
            color: '#38006b',
        }
    },
    slash: {
        color: '#8e0000',
    },
})