import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core'
import { read, create, update, remove } from './util/data/data-api'
import auth from './../../util/auth/auth-helper'

class DataTable extends Component {
  
  state = {
    page: 0,
    count: 1,
    data: [["Loading Data..."]],
    isLoading: false
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    this.setState({ isLoading: true });
    this.xhrRequest().then(res => {
      this.setState({ data: res.data, isLoading: false, count: res.total });
      console.log(this.state.data)
    });
  }

  xhrRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        read().then(result => {
          resolve({
            data: result,
            total: result.length
          });
        })
      }, 1000);
    });
  }

  changePage = (page) => {
    this.setState({
      isLoading: true,
    });
    this.xhrRequest(`/myApiServer?page=${page}`).then(res => {
      this.setState({
        isLoading: false,
        page: page,
        data: res.data,
        count: res.total,
      });
    });
  };

  render() {
    const columns = ["name", "description", "category", "company", "image"]
    const { data, page, count, isLoading } = this.state

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      serverSide: true,
      count: count,
      page: page,
      selectableRows: 'single',
      onTableChange: (action, tableState) => {
        console.log(action, tableState)

        switch (action) {
          case 'changePage':
            this.changePage(tableState.page)
            break
        }
      }
    }

    return (
      <div>
        <MUIDataTable title={<Typography variant="h6">
          H&#38;R Lista de productos
          {isLoading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
          </Typography>
          } data={data} columns={columns} options={options}
        />
      </div>
    )
  }
}

export default DataTable