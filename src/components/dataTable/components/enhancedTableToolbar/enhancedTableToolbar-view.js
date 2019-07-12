import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/AddBox'
import FilterListIcon from '@material-ui/icons/FilterList'
import useStyles from './EnhancedTableToolbar-styles'
  
export default function EnhancedTableToolbar({ handleChangeSelected }) {
    const classes = useStyles();

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
        <div>
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

EnhancedTableToolbar.propTypes = {
    handleChangeSelected: PropTypes.func.isRequired,
}