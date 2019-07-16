import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    root: {
        '&:hover': {
            transition: '0.3s',
            boxShadow:' 0 .5rem 1rem rgba(0,0,0,.15)!important',
        },
        '&:hover img': {
            transition: '0.3s',
            height: 85,
        },
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    imgBox: {
        height: 80,
        margin: '1.5rem 0',
        '& > img': {
            height: 80,
        },
    },
})