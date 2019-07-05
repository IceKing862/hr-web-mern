import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import AddIcon from '@material-ui/icons/AddBox'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { CircularProgress, TableFooter, TextField } from '@material-ui/core';

const headRows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Nombre' },
  { id: 'description', numeric: false, disablePadding: false, label: 'Descripción' },
  { id: 'category', numeric: false, disablePadding: false, label: 'Categoría' },
  { id: 'company', numeric: false, disablePadding: false, label: 'Marca' },
  { id: 'image', numeric: false, disablePadding: false, label: 'Imagen' },
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
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
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
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

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { isLoading, handleActionClick } = props;

  return (
    <Toolbar
      className={clsx(classes.root)}
    >
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          H&#38;R productos
          {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <div style={{display: 'flex'}}>
          <Tooltip title="Nuevo">
          <IconButton aria-label="New" onClick={() => handleActionClick('create')}>
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
  isLoading: PropTypes.bool.isRequired,
};

const usePaginationStyles = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    }
}));

function TablePaginationActions(props) {
    const classes = usePaginationStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="First Page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Next Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Last Page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
    );
};

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function EnhancedTableRow(props) {
  const { row, index, labelId, handleActionClick } = props

  return (
    <TableRow
      tabIndex={-1}
      key={index}
    >
      <TableCell padding="none" style={{padding: "0px 5px"}}>
        <div style={{display: 'flex'}}>
          <Tooltip title="Editar">
          <IconButton aria-label="Edit" onClick={() => handleActionClick('edit', row._id)}>
              <EditIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
          <IconButton aria-label="Delete" onClick={() => handleActionClick('delete', row._id)}>
              <DeleteIcon />
          </IconButton>
          </Tooltip>
        </div>
      </TableCell>
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
    </TableRow>
  )
}

EnhancedTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
  handleActionClick: PropTypes.func.isRequired,
}

function EnhancedTableRowCreate(props) {
  const { handleActionClick, handleCreateClick } = props
  const [values, setValues] = React.useState({
    name: '',
    description: '',
    category: '',
    company: '',
    image: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <TableRow style={{ height: '57px' }}>
      <TableCell padding="none" style={{padding: "0px 5px"}}>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <Tooltip title="Guardar">
          <IconButton aria-label="Save" onClick={() => handleCreateClick(values)}>
              <CheckIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Cancelar">
          <IconButton aria-label="Cancel" onClick={() => handleActionClick()}>
              <CloseIcon />
          </IconButton>
          </Tooltip>
        </div>
      </TableCell>
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
    </TableRow>
  )
}

function EnhancedTableRowEdit(props) {
  const { row, handleActionClick, handleUpdateClick } = props
  const [values, setValues] = React.useState({ ...row })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <TableRow style={{ height: '57px' }}>
      <TableCell padding="none" style={{padding: "0px 5px"}}>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <Tooltip title="Guardar">
          <IconButton aria-label="Save" onClick={() => handleUpdateClick(values, row._id)}>
              <CheckIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Cancelar">
          <IconButton aria-label="Cancel" onClick={() => handleActionClick()}>
              <CloseIcon />
          </IconButton>
          </Tooltip>
        </div>
      </TableCell>
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
    </TableRow>
  )
};

EnhancedTableRowEdit.propTypes = {
  row: PropTypes.object.isRequired,
  handleActionClick: PropTypes.func.isRequired,
  handleUpdateClick: PropTypes.func.isRequired,
}

function EnhancedTableRowDelete(props) {
  const { id, handleActionClick, handleDeleteClick } = props

  return (
    <TableRow style={{ height: '54px' }}>
      <TableCell padding="none" style={{padding: "0px 5px"}}>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <Tooltip title="Guardar">
          <IconButton aria-label="Save" onClick={() => handleDeleteClick(id)}>
              <CheckIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Cancelar">
          <IconButton aria-label="Cancel" onClick={() => handleActionClick()}>
              <CloseIcon />
          </IconButton>
          </Tooltip>
        </div>
      </TableCell>
      <TableCell colSpan="6">
        <Typography variant="h6">
          ¿Estas seguro papu?
        </Typography>
      </TableCell>
    </TableRow>
  )
}

EnhancedTableRowDelete.propTypes = {
  id: PropTypes.string.isRequired,
  handleActionClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  }
}));

export default function EnhancedTable(props) {
  const { rows, isLoading, selected, handleActionClick, handleDeleteClick, handleUpdateClick, handleCreateClick } = props
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    handleChangePage(event, 0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          isLoading={isLoading}
          handleActionClick={handleActionClick}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              isLoading={isLoading}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <React.Fragment key={index}>
                      {(selected.action === 'delete' && selected.id === row._id) ? (
                          <EnhancedTableRowDelete
                            id={row._id}
                            handleActionClick={handleActionClick}
                            handleDeleteClick={handleDeleteClick}
                          />
                        ) : (selected.action === 'edit' && selected.id === row._id) ? (
                          <EnhancedTableRowEdit
                            row={row}
                            handleActionClick={handleActionClick}
                            handleUpdateClick={handleUpdateClick}
                          />
                        ) : (
                          <EnhancedTableRow
                            row={row}
                            index={index}
                            labelId={labelId}
                            handleActionClick={handleActionClick}
                          />
                        )
                      }
                    </React.Fragment>                   
                  );
                })}
              {selected.action === 'create' && 
                <EnhancedTableRowCreate
                  handleActionClick={handleActionClick}
                  handleCreateClick={handleCreateClick}
                />
              }
              {emptyRows > 0 && (
                <TableRow style={{ height: 54 * emptyRows }}>
                  <TableCell colSpan={headRows.length + 1} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        labelRowsPerPage="Resultados por página:"
                        SelectProps={{
                            inputProps: { 'aria-label': 'Resultados por página' },
                            native: false,
                            }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    </div>
  );
}

EnhancedTable.propTypes = {
    rows: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleDeleteClick: PropTypes.func.isRequired
}