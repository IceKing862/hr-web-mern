import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: '0 0 3rem 0',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexFlow: 'row nowrap',
            padding: '3rem 0',
        }
    },
    img: {
        position: 'relative',
        overflow: 'hidden',
        width: 280,
        height: 280,
        margin : '20px 0',
        borderRadius: '100%',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        border: '8px solid white',
        transition: '0.3s',
        '&:nth-child(1)': {
            zIndex: 500,
            backgroundImage: props => props.left,
            '&:hover': {
                backgroundImage: props => props.left,
            },
            [theme.breakpoints.up('md')]: {
                marginRight: -80,
            }
        },
        '&:nth-child(2)': {
            width: 280,
            height: 280,
            zIndex: 501,
            backgroundImage: props => props.mid,
            '&:hover': {
                backgroundImage: props => props.mid,
            },
            [theme.breakpoints.up('md')]: {
                width: 380,
                height: 380,
                marginTop: -80,
            },
        },
        '&:nth-child(3)': {
            zIndex: 500,
            backgroundImage: props => props.right,
            '&:hover': {
                backgroundImage: props => props.right,
            },
            [theme.breakpoints.up('md')]: {
                marginLeft: -80,
            }
        },
    }, 
    details: {
        position: 'absolute',
        top: '65%',
        width: '100%',
        height: '35%',
        textAlign: 'center',
        backgroundColor: 'rgba(73, 73, 73, 0.5)',
        color: 'white',
    }
}))