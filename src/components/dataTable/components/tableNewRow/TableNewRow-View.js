import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'
import TableRowActions from './../tableRowActions/'

const useStyles = makeStyles({
    root: {
        height: '57px',
        transition: 'all 300ms ease 0s'
    }
})

export default function TableNewRow(props) {
    const classes = useStyles()
    const { selected, handleChangeSelected } = props
    const [values, setValues] = React.useState({ name: '', description: '', category: '', company: '', image: '' })

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value })
    }
  
    return (
      <TableRow
        tabIndex={-1}
        className={`${classes.root}`}
      >
        <TableCell padding="none" style={{padding: "0px 5px"}}>
          <TableRowActions
            index={-1}
            row={values}
            selected={selected}
            handleChangeSelected={handleChangeSelected}
          />
        </TableCell>
        <TableCell>
            <TextField
                value={values.name}
                onChange={handleChange('name')}
                placeholder="Nombre"
                autoFocus={true}
            />
        </TableCell>
        <TableCell>
            <TextField
                value={values.description}
                onChange={handleChange('description')}
                placeholder="Descripción"
            />
        </TableCell>
        <TableCell>
            <TextField
                value={values.category}
                onChange={handleChange('category')}
                placeholder="Categoría"
            />
        </TableCell>
        <TableCell>
            <TextField
                value={values.company}
                onChange={handleChange('company')}
                placeholder="Marca"
            />
        </TableCell>
        <TableCell>
            <TextField
                value={values.image}
                onChange={handleChange('image')}
                placeholder="Imagen"
            />
        </TableCell>
      </TableRow>
    )
}

TableNewRow.propTypes = {
    selected: PropTypes.object.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
}