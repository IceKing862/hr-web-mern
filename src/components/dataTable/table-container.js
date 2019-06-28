import React, { Component } from 'react'
import EnhancedTable from './table'
import { read } from './util/data/data-api'

const headRows = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
    { id: 'description', numeric: false, disablePadding: false, label: 'Descripción' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Categoría' },
    { id: 'company', numeric: false, disablePadding: false, label: 'Marca' },
    { id: 'image', numeric: false, disablePadding: false, label: 'Imagen' },
];

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

    render() {
        const { data, isLoading } = this.state

        return (
            <EnhancedTable 
                headRows={headRows}
                data={data}
                isLoading={isLoading}
            />
        )
    }
}

export default Table