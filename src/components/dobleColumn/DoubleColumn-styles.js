import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    article: {
        height: '90vh',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        }
    },
    background: {
        height: '50vh',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        }
    }
}))