import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root: {
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        position: "fixed",
        right: 20,
        bottom: 20,
        border: '1px solid white',
        borderRadius: 8,
        backgroundColor: 'rgba(30, 33, 50, 0.8)',
        transition: 'all 0.3s ease-in-out',
        '& i': {
            color: 'rgba(255, 255, 255, 0.8)',
        },
        '&:hover': {
            backgroundColor: 'rgba(30, 33, 50, 1)',
        },
        '&:hover i': {
            color: 'white',
        }
    }
})