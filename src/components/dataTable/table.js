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
import Checkbox from '@material-ui/core/Checkbox';
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
import Dialog from '../alert/index'

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
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
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
  const { numSelected, isLoading } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} seleccionado(s)
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            H&#38;R productos
            {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0  ? (
          <div style={{display: 'flex'}}>
            <Tooltip title="Cancelar">
            <IconButton aria-label="Close">
                <CloseIcon />
            </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div style={{display: 'flex'}}>
            <Tooltip title="Nuevo">
            <IconButton aria-label="New">
                <AddIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Filtrar">
            <IconButton aria-label="Filter">
                <FilterListIcon />
            </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function TableEditActions(props) {

  return (
    <TableRow>
        <TableCell style={{display: 'flex'}}>
          <Tooltip title="Aceptar">
            <IconButton aria-label="Accept">
                <CheckIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Canelar">
            <IconButton aria-label="Cancel">
                <CloseIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell>
          <TextField />
        </TableCell>
        <TableCell>
          <TextField />
        </TableCell>
        <TableCell>
          <TextField />
        </TableCell>
        <TableCell>
          <TextField />
        </TableCell>
        <TableCell>
          <TextField />
        </TableCell>
    </TableRow>
  )
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
  const { rows, isLoading, handleDeleteClick } = props
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false)

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    handleChangePage(event, 0)
  }

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose(confirm) {
    if (confirm) {
      handleDeleteClick(selected, setSelected)
    }
    setOpen(false)
  }

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
          numSelected={selected.length}
          isLoading={isLoading}
        />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              isLoading={isLoading}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="none" style={{padding: "0px 5px"}}>
                        <div style={{display: 'flex'}}>
                          <Tooltip title="Editar">
                          <IconButton aria-label="Edit">
                              <EditIcon />
                          </IconButton>
                          </Tooltip>
                          <Tooltip title="Eliminar">
                          <IconButton aria-label="Delete">
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
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 70 * emptyRows }}>
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
        <Dialog
          open={open}
          handleClose={handleClose}
          selected={selected}
        />
      </Paper>
    </div>
  );
}

EnhancedTable.propTypes = {
    rows: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleDeleteClick: PropTypes.func.isRequired
}