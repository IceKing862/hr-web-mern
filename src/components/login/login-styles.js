import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage: 'url("https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
    },
    card: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignContent: 'center',
        maxWidth: 400,
        margin: 'auto',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        [theme.breakpoints.up('md')]: {
            minWidth: 400,
        }
    },
    content: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}))