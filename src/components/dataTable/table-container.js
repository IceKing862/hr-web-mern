import React, { Component } from 'react'
import EnhancedTable from './table'
import { withSnackbar } from 'notistack';
import { read, remove } from './util/actions/actions'
import auth from './../../util/auth/auth-helper'

class Table extends Component {
    state = {
        data: [],
        isLoading: false
    }
    
    componentDidMount() {
        this.setState({ isLoading: true })
        this.getData().then(res => {
            this.setState({ data: res, isLoading: false })
        })
    }

    componentDidUpdate(nextProps, nextState) {
        return this.state.data !== nextState.data
    }
    
    getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                read().then(result => {
                    resolve(
                        result
                    )
                })
            }, 1000)
        })
    }

    handleDeleteClick = (id) => {
        return new Promise((resolve, reject) => {
            const token = auth.isAuthenticated()
            setTimeout(() => {
                remove(token, id).then(res => {
                    if (res.error) {
                        this.notification('Fallo al eliminar producto', 'error')
                    } else {
                        this.notification('El Producto se elimino correctamente', 'success')
                        this.setState({ isLoading: true })
                        this.getData().then(res => {
                            this.setState({ data: res, isLoading: false })
                        })
                    }
                })
                resolve()
            }, 1000)
        })
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

    render() {
        const { data, isLoading } = this.state

        return (
            <EnhancedTable
                rows={data}
                isLoading={isLoading}
                handleDeleteClick={this.handleDeleteClick}
            />
        )
    }
}

export default withSnackbar(Table)