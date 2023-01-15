import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmins } from '../../../redux/actions'
import { DataGrid } from '@material-ui/data-grid'
import st from './AdminList.module.css'
import { useAuth0 } from '@auth0/auth0-react'


export default function Admins() {
    const dispatch = useDispatch()
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        dispatch(getAdmins(getAccessTokenSilently))
    }, [])

    const allAdmins = useSelector((state) => state.admins)

    const columns = [
        { field: 'id', headerName: 'ID', width: 92 },
        { field: 'profilePic', headerName: 'User', width: 220, renderCell: (params)=>{
          return (
            <div className={st.adminListUser}>
              <img src={params.row.profilePic} alt='' />
              {params.row.name}
            </div>
          )
        }},
        { field: 'idAdm', headerName: 'Admin ID', width: 220 },
        // { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'country', headerName: 'Country', width: 180 },
        { field: 'active', headerName: 'Active', width: 140 }
    ]

    const adminRows = allAdmins.map((Adm, index) => ({
        id: index + 1,
        profilePic: Adm.image,
        idAdm: Adm._id,
        name: Adm.fullName,
        email: Adm.email,
        active: Adm.active
    }))

    return (
        <div style={{ flex: 7 }}>
            <DataGrid
                rows={adminRows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
