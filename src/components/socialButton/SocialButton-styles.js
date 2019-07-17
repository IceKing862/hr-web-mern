import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root: {
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        margin: '0 10px !important',
        fontSize: 20,
        overflow: 'Hidden',
        color: '',
        border: '2px solid #bdbdbd',
        transition: 'border-radius 0.2s linear 0s',
        transform: 'rotate(45deg)',
        '&:hover': {
            borderRadius: 0,
        },
        '& i': {
            transition: 'transform 0.01s linear 0s',
            transform: 'rotate(-45deg)',
        }
    }
})