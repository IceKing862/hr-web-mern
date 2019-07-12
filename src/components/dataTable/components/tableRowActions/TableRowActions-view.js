import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'
import TableRowOptions from '../tableRowOptions'

export default function TableRowActions({ row, selected, handleChangeSelected }) {
    const [values, setValues] = React.useState({ ...row })
    
    React.useEffect(() => {
        setValues({ ...row })
    }, [row])
    
    const handleChange =  event => {
      setValues({ ...values, [event.target.name]: event.target.value  })
    }

    return (
        <TableRow
            tabIndex={-1}
            style={{height: '57px', transition: 'all 300ms ease 0s'}}
        >
            <TableCell padding="none" style={{padding: "0px 5px"}}>
                <TableRowOptions
                    row={values}
                    selected={selected}
                    handleChangeSelected={handleChangeSelected}
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="name"
                    name="name"
                    value={values.name || ''}
                    onChange={handleChange}
                    placeholder="Nombre"
                    autoFocus={true}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="description"
                    value={values.description || ''}
                    onChange={handleChange}
                    placeholder="Descripción"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="category"
                    value={values.category || ''}
                    onChange={handleChange}
                    placeholder="Categoría"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="company"
                    value={values.company || ''}
                    onChange={handleChange}
                    placeholder="Marca"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="image"
                    value={values.image || ''}
                    onChange={handleChange}
                    placeholder="Imagen"
                />
            </TableCell>
      </TableRow>
    )
}

TableRowActions.propTypes = {
    row: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
}