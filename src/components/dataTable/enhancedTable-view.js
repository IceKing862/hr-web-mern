import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import EnhancedTableHead from './components/enhancedTableHead'
import EnhancedTableToolbar from './components/enhancedTableToolbar'
import TablePaginationActions from './components/tablePaginationActions'
import EnhancedTableRow from './components/enhancedTableRow'

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
    const classes = useStyles();
    const { 
        headRows,
        rows,
        order,
        orderBy,
        page,
        rowsPerPage,
        emptyRows,
        isLoading,
        selected,
        stableSort,
        getSorting,
        handleRequestSort,
        handleChangePage,
        handleChangeRowsPerPage,
        handleChangeSelected
    } = props

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar />
                <div className={classes.tableWrapper}>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size='small'
                >
                    <EnhancedTableHead
                        headRows={headRows}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                    {stableSort(rows, getSorting(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <EnhancedTableRow
                                key={index}
                                row={row}
                                index={index}
                                labelId={labelId}
                                selected={selected}
                                handleChangeSelected={handleChangeSelected}
                            />                
                        );
                        })}
                    {/* {selected.action === 'create' && 
                        <EnhancedTableRowCreate
                        handleActionClick={handleActionClick}
                        handleCreateClick={handleCreateClick}
                        />
                    } */}
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
    )
}

EnhancedTable.propTypes = {
    headRows: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    emptyRows: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    selected: PropTypes.object.isRequired,
    stableSort: PropTypes.func.isRequired,
    getSorting: PropTypes.func.isRequired,
    handleRequestSort: PropTypes.func.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
    handleChangeSelected: PropTypes.func.isRequired,
}