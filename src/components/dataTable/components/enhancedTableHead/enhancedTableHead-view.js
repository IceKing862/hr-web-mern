import React from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'

export default function EnhancedTableHead({ headRows, order, orderBy, onRequestSort }) {
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };
  
    return (
        <TableHead>
            <TableRow>
            <TableCell>
                Opciones
            </TableCell>
            {headRows.map(row => (
                <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
                >
                <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={createSortHandler(row.id)}
                >
                    {row.label}
                </TableSortLabel>
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    headRows: PropTypes.array.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    onRequestSort: PropTypes.func.isRequired,
}