import React, { Component } from "react";
import MaterialTable from "material-table";

class DataTable extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
            options={{
                search: false
            }}
            columns={[
                { title: "Nombre", field: "name" },
                { title: "Descripción", field: "description" },
                { title: "Categoria", field: "category" },
                { title: "Marca", field: "company" },
                { 
                    title: "Imagen", 
                    field: "image",
                    render: rowData => (
                        <img
                          style={{ height: 36, borderRadius: '50%', margin: 'auto' }}
                          src={`http://localhost:3000/${rowData.image}`}
                          alt={rowData.image}
                        />
                    )
                }
            ]}
            data={query => new Promise((resolve, reject) => {
                    fetch('http://localhost:3000/products')
                        .then(response => response.json())
                        .then(result => {
                            console.log(result)
                            resolve({
                                data: result,
                                page: 0,
                                totalCount: result.length
                            })
                        })
                })
            }
            title="Productos"
        />
      </div>
    );
  }
}

export default DataTable