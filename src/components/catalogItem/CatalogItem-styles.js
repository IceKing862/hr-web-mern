import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme =>({
    root: {
        position: 'relative',
        overflow: 'hidden',
        margin: '1.5rem',
        padding: '1rem',
        width: 300,
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        boxShadow: '0 0.5rem 1rem 0.25rem rgba(0,0,0,.15)!important',
        '&:hover': {
            
        }
    },
    header: {
        marginBottom: 12,
        width: '100%',
        '& h6': {
            fontSize: 14,
            fontWeight: 'bold'
        }
    },
    img: {
        margin: '1rem 0 2rem',
        height: 175,
    },
    body: {
        marginTop: '1rem',
        padding: '1rem',
        width: '100%',
    },
    name: {
        marginBottom: 16,
        fontSize: 16.5,
        fontWeight: 'bold'
    },
    description: {
        marginBottom: 0,
        height: 72,
        fontSize: 12,
        color: '#9e9e9e'
    },
    link: {
        marginRight: '1rem',
        color: 'black',
        float: 'right',
        '&:hover': {
            color: '#8e0000',
        }
    },
    category: {
        position: 'absolute',
        top: '53%',
        right: 40,
        '& h6': {
            margin: 0,
            fontSize: 14,
            fontWeight: 'bold',
        },
        '& p': {
            margin: 0,
            fontSize: 12,
            color: '#9e9e9e',
        }
    },
    categoryIcon: {
        width: 40,
        height: 40,
        marginTop: 10,
        float: 'right',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: 'white',
        borderRadius: '100%',   
    }
}))