import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    buttonLeft: {
        border: 'none',
        backgroundColor: '#2196f3',
        '&:hover': {
            backgroundColor: '#0069c0',
        }
    },
    buttonRight: {
        border: 'none',
        backgroundColor: '#fd5949',
        '&:hover': {
            backgroundColor: '#c31f20',
        }
    },
    text: {
        color: '#bdbdbd',
        '&:hover': {
            color: 'white',
            textDecoration: 'none',
        }
    }
})