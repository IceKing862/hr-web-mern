import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme =>({
    root: {
        minWidth: '100%',
        height: 229,
        margin: '0.25rem 0.12rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        border: '1px solid transparent',
        '&:hover': {
            border: '1px solid black'
        },
    },
    img: {
        height: '90%',
    }
}))