import React from 'react'
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/AddBox'
import FilterListIcon from '@material-ui/icons/FilterList'

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
}));
  
export default function EnhancedTableToolbar(props) {
    const classes = useStyles();
    const { handleChangeSelected } = props

    return (
        <Toolbar
        className={clsx(classes.root)}
        >
        <div className={classes.title}>
            <Typography variant="h6" id="tableTitle">
            H&#38;R productos
            </Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
            <div style={{display: 'flex'}}>
            <Tooltip title="Nuevo">
            <IconButton aria-label="New" onClick={() => handleChangeSelected('creating')}>
                <AddIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Filtrar">
            <IconButton aria-label="Filter">
                <FilterListIcon />
            </IconButton>
            </Tooltip>
            </div>
        </div>
        </Toolbar>
    );
};