import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    card: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignContent: 'center',
        maxWidth: 400,
        margin: 'auto',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        flexFlow: 'column nowrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        color:'#4a2c52',
        backgroundColor: 'white'
    }
}))