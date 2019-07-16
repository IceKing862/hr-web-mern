import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root: {
        position: 'relative',
        height: 308,
        padding: '3rem 0',
        boxShadow:' 0 .5rem 1rem rgba(0,0,0,.15)!important',
        '&:hover .fa-quote-left': {
            fontSize: 45,
        },
        '@media (min-width: 992px)' : {
            height: 338,
        },
    },
    body:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    quote: {
        position: 'absolute',
        top: 0,
        left: '15%',
        fontSize: 40,
        transition: '0.3s',
        transform: 'translateY(-50%) translateX(-50%)',
    },
    img: {
        position: 'absolute',
        height: 60,
        top: '100%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
    },
})