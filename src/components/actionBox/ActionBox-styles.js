import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        height: '50vh',
        backgroundImage: 'url("./static/media/slide4.jpeg")',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    },
    searchBox: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: '90%',
        textAlign: 'center',
        fontSize: 22,
        margin: '30px 0',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            width: '65%'
        }
    },
    inputBox: {
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%'
        }
    },
    input:{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    icon: {
        backgroundColor: 'rgba(21, 101, 192, 0.8)',
        '& i': {
            color: 'white',
        }
    }
}))