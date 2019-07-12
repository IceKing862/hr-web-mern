import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    spacer: {
        flex: '1 1 100%',
    },
    title: {
        flex: '0 0 auto',
    },
}));