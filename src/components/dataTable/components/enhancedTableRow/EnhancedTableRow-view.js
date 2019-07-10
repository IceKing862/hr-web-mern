import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import TableRowActions from './../tableRowActions/'

export default function EnhancedTableRow(props) {
    const { row, index, labelId, selected, handleChangeSelected } = props
    const [values, setValues] = React.useState({ ...row })

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value })
    }
  
    return (
      <TableRow
        tabIndex={-1}
        key={index}
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
                ¿Estas seguro papu?
                </Typography>
            </TableCell>
        ) : (selected.action === 'editing' && selected.id === row._id) ? (
            <React.Fragment>
                <TableCell>
                <TextField
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    />
                </TableCell>
                <TableCell>
                    <TextField
                    value={values.description}
                    onChange={handleChange('description')}
                    margin="normal"
                    />
                </TableCell>
                <TableCell>
                    <TextField
                    value={values.category}
                    onChange={handleChange('category')}
                    margin="normal"
                    />
                </TableCell>
                <TableCell>
                    <TextField
                    value={values.company}
                    onChange={handleChange('company')}
                    margin="normal"
                    />
                </TableCell>
                <TableCell>
                    <TextField
                    value={values.image}
                    onChange={handleChange('image')}
                    margin="normal"
                    />
                </TableCell>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <TableCell component="th" id={labelId} scope="row">
                    <Typography variant="subtitle1" noWrap={true} >
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
    index: PropTypes.number.isRequired,
    labelId: PropTypes.string.isRequired,
    selected: PropTypes.object.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
}