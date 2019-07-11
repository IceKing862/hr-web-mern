import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
import TableRowActions from './../tableRowActions/'
import TableEditRow from './../tableEditRow/'

const useStyles = makeStyles({
    root: {
        height: '57px',
        transition: 'all 300ms ease 0s'
    },
    text: {
        opacity: 0.2,
    }
})

export default function EnhancedTableRow(props) {
    const classes = useStyles()
    const { row, labelId, selected, handleChangeSelected } = props

    return (
      <TableRow
        tabIndex={-1}
        className={`${classes.root} ${(selected.action !== 'reading' && selected.id !== row._id) && classes.text}`}
      >
        <TableCell padding="none" style={{padding: "0px 5px"}}>
          <TableRowActions
            row={row}
            selected={selected}
            handleChangeSelected={handleChangeSelected}
          />
        </TableCell>

        {(selected.action === 'deleting' && selected.id === row._id) ? (
            <TableCell colSpan="6">
                <Typography variant="h6">
                ¿Esta seguro de Eliminar este registro?
                </Typography>
            </TableCell>
        ) : (selected.action === 'editing' && selected.id === row._id) ? (
            <TableEditRow row={row} />
        ) : (
            <React.Fragment>
                <TableCell component="th" id={labelId} scope="row">
                    <Typography variant="subtitle1" noWrap={true}>
                        {row.name}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                    <Typography variant="subtitle1" noWrap={true} >
                        {row.description}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                    <Typography variant="subtitle1" noWrap={true} >
                        {row.category}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                    <Typography variant="subtitle1" noWrap={true} >
                        {row.company}
                    </Typography>
                </TableCell>
                <TableCell align="left">
                    <img src={`http://localhost:3000/${row.image}`} height="36px" alt={row.name} />
                </TableCell>
            </React.Fragment>
        )}
      </TableRow>
    )
}

EnhancedTableRow.propTypes = {
    row: PropTypes.object.isRequired,
    labelId: PropTypes.string.isRequired,
    selected: PropTypes.object.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
}