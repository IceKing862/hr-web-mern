import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

export default function TableRowActions(props) {
    const { row, selected, handleChangeSelected } = props
    let current = (selected.action === 'deleting') ? 'delete' : (selected.action === 'editing') ? 'edit' : ''

    return (
        <div style={{display: 'flex'}}>
            {(selected.action !== 'reading' && selected.id === row._id) ?
            (
                <React.Fragment>
                    <Tooltip title="Guardar">
                    <IconButton aria-label="Save" onClick={() => handleChangeSelected('saving', row._id, current, row)}>
                        <CheckIcon />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar">
                    <IconButton aria-label="cancel" onClick={() => handleChangeSelected()}>
                        <CloseIcon />
                    </IconButton>
                    </Tooltip>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Tooltip title="Editar">
                    <IconButton aria-label="Edit" onClick={() => handleChangeSelected('editing', row._id)}>
                        <EditIcon />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar">
                    <IconButton aria-label="Delete" onClick={() => handleChangeSelected('deleting', row._id)}>
                        <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                </React.Fragment>
            )}
        </div>
    )
}

TableRowActions.propTypes = {
    selected: PropTypes.object.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
}