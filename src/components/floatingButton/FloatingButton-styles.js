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
        backgroundColor: '#1e2132',
        transition: 'all 0.3s ease-in-out',
        '& i': {
            color: 'white',
        }
    }
})