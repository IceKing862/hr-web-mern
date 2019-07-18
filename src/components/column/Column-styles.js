import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '3rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
        fontSize: '2.8rem !important',
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem !important',
        }
    }
}))