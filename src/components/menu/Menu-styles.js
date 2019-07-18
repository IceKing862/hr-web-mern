import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
    link: {
        color: 'white',
        fontSize: 22,
        textShadow: '2px 2px 4px #000000',
        transition: 'all ease-in-out 0.3s',
        [theme.breakpoints.up('md')]: {
            fontSize: 30
        },
        '&:hover': {
            color: '#03a9f4',
            textDecoration: 'none',
        }
    }
}))