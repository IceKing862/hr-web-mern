import React from 'react'
import DataTable from './../../components/datatable'
import { Link } from 'react-router-dom'
import auth from './../../util/auth/auth-helper'


export default () => {
    return (
        <div>
            <Link className="ml-3" to="/login" onClick={() => auth.signout()}>log out</Link>
            <DataTable />
        </div>
    )
}