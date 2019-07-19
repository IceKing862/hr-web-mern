import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme =>({
    root: {
        minWidth: '100%',
        minHeight: 229,
        margin: '0.25rem 0.12rem',
        backgroundImage: props => props.backgroundImage,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f5f5f5',
        '&:hover': {
            border: '1px solid black'
        },
        [theme.breakpoints.up('sm')]: {
            
        }

    }
}))