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
        '&:hover': {
            color: '#0077c2',
            textDecoration: 'none'
        }
    },
    icon: {
        fontSize: 28,
        marginRight: 10,
        color: '#002f6c',
        '&:hover': {
            color: '#0077c2',
            textDecoration: 'none'
        }
    }
})