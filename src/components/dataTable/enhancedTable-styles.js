import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
      width: '100%',
      position: 'relative',
      marginTop: theme.spacing(3),
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    loading: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
}));