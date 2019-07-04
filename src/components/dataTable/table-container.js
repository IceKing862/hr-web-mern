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

    handleDeleteClick = (selected, cb) => {
        return new Promise((resolve, reject) => {
            const token = auth.isAuthenticated()
            setTimeout(() => {
                selected.map(item => remove(token, item).then(res => 
                    {               
                        if (res.error) {
                            this.props.enqueueSnackbar('Fallo al eliminar producto', {
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                },
                                variant: 'error'
                            })
                        } else {
                            this.props.enqueueSnackbar('El producto se elimino', {
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                },
                                variant: 'success'
                            })
                        }
                    }))
                    this.setState({ isLoading: true })
                    this.getData().then(res => {
                        this.setState({ data: res, isLoading: false })
                    })
                    cb([])
            }, 1000)
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