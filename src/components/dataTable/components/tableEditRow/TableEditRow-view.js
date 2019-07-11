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
    },
    text: {
        opacity: 0.2,
    }
})

export default function EnhancedTableRow(props) {
    const classes = useStyles()
    const { row, selected, handleChangeSelected } = props
    const [values, setValues] = React.useState({ ...row })

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value  })
    }

    React.useEffect(() => {
        setValues({ ...row })
    }, [row])

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

EnhancedTableRow.propTypes = {
    row: PropTypes.object.isRequired,
}