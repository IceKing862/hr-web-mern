import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './EnhancedTable-styles'
import EnhancedTableHead from './components/enhancedTableHead'
import EnhancedTableToolbar from './components/enhancedTableToolbar'
import TablePaginationActions from './components/tablePaginationActions'
import EnhancedTableRow from './components/enhancedTableRow'
import TableEditRow from './components/tableRowActions'

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
        handleChangeSelected,
    } = props

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            {isLoading && <div className={classes.loading}><CircularProgress /></div>}
                <EnhancedTableToolbar
                    handleChangeSelected={handleChangeSelected}
                />
                <div className={classes.tableWrapper}>
                <Table
                    className={classes.table}
                    aria-labelledby="H&#38;R"
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
                            <React.Fragment key={index}>
                                {(selected.action === 'editing' && selected.id === row._id) ? (
                                    <TableEditRow
                                        row={row}
                                        selected={selected}
                                        handleChangeSelected={handleChangeSelected}
                                    />
                                ) : ( 
                                    <EnhancedTableRow
                                        key={index}
                                        row={row}
                                        labelId={labelId}
                                        selected={selected}
                                        handleChangeSelected={handleChangeSelected}
                                    />                
                                )}
                            </React.Fragment>
                        );
                        })
                    }
                    {selected.action === 'creating' && 
                        <TableEditRow
                            row={{}}
                            selected={selected}
                            handleChangeSelected={handleChangeSelected}
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