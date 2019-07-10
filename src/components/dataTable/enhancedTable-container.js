import React, { Component } from 'react'
import EnhancedTable from './enhancedTable-view'
import { withSnackbar } from 'notistack';
import { create, read, remove, update } from './util/actions/actions'
import auth from '../../util/auth/auth-helper'

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

function productFormater(product) {
    return [
        { "propName": "name", "value": product.name },
        { "propName": "description", "value": product.description },
        { "propName": "category", "value": product.category },
        { "propName": "company", "value": product.company },
    ]
}

class Table extends Component {
    state = {
        rows: [],
        order: 'asc',
        orderBy: 'name',
        page: 0,
        rowsPerPage: 5,
        isLoading: false,
        selected: { action: 'reading', id: '0' }
    }
    
    constructor(props) {
        super(props)
        this.handleRequestSort = this.handleRequestSort.bind(this)
        this.handleChangePage = this.handleChangePage.bind(this)
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
        this.handleChangeSelected = this.handleChangeSelected.bind(this)
    }

    componentDidMount() {
        this.getData()
    }
    
    componentDidUpdate(nextProps, nextState) {
        return this.state.data !== nextState.data
    }

    handleRequestSort(event, property) {
        const isDesc = this.state.orderBy === property && this.state.order === 'desc';
        this.setState({ order: isDesc ? 'asc' : 'desc' });
        this.setState({ orderBy: property })
      }

    handleChangePage(event, newPage) {
        this.setState({ page: newPage })
    }

    handleChangeRowsPerPage(event) {
        this.setState({ rowsPerPage: +event.target.value })
        this.handleChangePage(event, 0)
    }

    handleChangeSelected(action = 'reading', id = null, op = null, obj = null) {
        if (action === 'deleting') {
            this.setState({ selected: { action: action, id: id } })
        } else if (action === 'editing') {
            this.setState({ selected: { action: action, id: id } })
        } else if (action === 'saving') {
            if (op === 'delete') {
                this.handleDeleteClick(id).then(() => this.setState({ selected: { action: 'reading', id: null } }))
            } else if (op === 'edit') {
                this.handleUpdateClick(obj, id).then(() => this.setState({ selected: { action: 'reading', id: null } }))
            } else if (op === 'add') {
                this.handleCreateClick(obj).then(() => this.setState({ selected: { action: 'reading', id: null } }))
            } else {
                this.handleUpdateClick(this.setState({ selected: { action: 'reading', id: null } })) 
            }
        } else {
            this.setState({ selected: { action: action, id: id } })
        }
    }
    
    notification(message, variant) {
        this.props.enqueueSnackbar(message, {
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
            variant: variant
        })
    }

    getData = () => {
        this.setState({ isLoading: true })
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                read().then(result => {
                    resolve(
                        this.setState({ rows: result, isLoading: false })
                    )
                })
            }, 1000)
        })
    }

    handleCreateClick = product => {
        return new Promise((revolve, reject) => {
            const token = auth.isAuthenticated()
            setTimeout(() => {
                create(product, token)
            })
        })
    }

    handleDeleteClick = (id) => {
        return new Promise((resolve, reject) => {
            const token = auth.isAuthenticated()
            setTimeout(() => {
                remove(token, id).then(res => {
                    if (res.error) {
                        this.getData().then(() => this.notification('Fallo al eliminar producto', 'error'))
                    } else {
                        this.getData().then(() => this.notification('El Producto se elimino correctamente', 'success'))
                    }
                })
                resolve()
            }, 1000)
        })
    }

    handleUpdateClick = (product, id) => {
        return new Promise((resolve, reject) => {
            const token = auth.isAuthenticated()
            const newProduct = productFormater(product)
            setTimeout(() => {
                update(newProduct, token, id).then(res => {
                    if (res.error) {
                        this.notification('Fallo al actualizar producto', 'error')
                    } else {
                        this.notification('El Producto se actualizo correctamente', 'success')
                        this.getData()
                    }
                })
            }, 1000)
        })
    }

    render() {
        const { rows, order, orderBy, page, rowsPerPage, isLoading, selected } = this.state
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        
        return (
            <EnhancedTable
                headRows={headRows}
                rows={rows}
                order={order}
                orderBy={orderBy}
                page={page}
                rowsPerPage={rowsPerPage}
                emptyRows={emptyRows}
                isLoading={isLoading}
                selected={selected}
                
                stableSort={stableSort}
                getSorting={getSorting}
                handleRequestSort={this.handleRequestSort}
                handleChangePage={this.handleChangePage}
                handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                handleChangeSelected={this.handleChangeSelected}
            />
        )
    }
}

export default withSnackbar(Table)