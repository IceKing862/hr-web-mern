import React, { Component } from 'react'
import EnhancedTable from './table'
import { withSnackbar } from 'notistack';
import { create, read, remove, update } from './util/actions/actions'
import auth from './../../util/auth/auth-helper'

function notification(message, variant) {
    this.props.enqueueSnackbar(message, {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        variant: variant
    })
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
        data: [],
        isLoading: false,
        selected: { action: 'read', id: '0' }
    }
    
    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(nextProps, nextState) {
        return this.state.data !== nextState.data
    }
    
    getData = () => {
        this.setState({ isLoading: true })
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                read().then(result => {
                    resolve(
                        this.setState({ data: result, isLoading: false })
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
                        notification('Fallo al eliminar producto', 'error')
                        this.handleActionClick()
                    } else {
                        notification('El Producto se elimino correctamente', 'success')
                        this.getData()
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
                        notification('Fallo al actualizar producto', 'error')
                    } else {
                        notification('El Producto se actualizo correctamente', 'success')
                        this.getData()
                    }
                })
            }, 1000)
        })
    }

    
    handleActionClick(action = 'read', id= '') {
        const { selected } = this.state
        switch (action) {
        case 'delete':
            console.log(selected)
            break;
        case 'edit':
            this.setState({ selected: { action: 'edit', id: id } })
            break;
        case 'create':
            this.setState({ selected: { action: 'create', id: id } })
            break;

            default:
            this.setState({ selected: { action: 'read', id: id } })
            break;
        }
    }

    render() {
        const { data, isLoading, selected } = this.state
        return (
            <EnhancedTable
                rows={data}
                isLoading={isLoading}
                selected={selected}
                handleActionClick={this.handleActionClick}
                handleDeleteClick={this.handleDeleteClick}
                handleUpdateClick={this.handleUpdateClick}
                handleCreateClick={this.handleCreateClick}
            />
        )
    }
}

export default withSnackbar(Table)