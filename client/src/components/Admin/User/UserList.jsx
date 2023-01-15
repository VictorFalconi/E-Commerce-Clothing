import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, updateUserStatus } from '../../../redux/actions'
import st from './UserList.module.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserList() {
    const {getAccessTokenSilently} = useAuth0()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUsers())
    }, [allUsers])

    const users = useSelector((state) => state.users)

    const handleActive = (e) =>{

        const id = e.target.name;
        const bool = e.target.value
        var nueva 
        if(bool === 'false'){
        nueva = true
        }else{
             nueva = false
        }
        const value = {'active': nueva}
        dispatch(updateUserStatus(id, value))        
        
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 92 },
        {
            field: 'pic',
            headerName: 'Photo',
            width: 115,
            renderCell: (params) => {
                return (
                    <div className={st.userListUser}>
                        <img
                            className={st.userListPic}
                            src={params.row.pic}
                            alt=""
                        />
                        {params.row.name}
                    </div>
                )
            },
        },
        { field: 'idUser', headerName: 'User ID', width: 130 },
        { field: 'fullName', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'active', headerName: 'Active', width: 120 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        
                        <div>
                            <button src={params.row.active} className={st.userListEdit} onClick={(e) => handleActive(e)}>Enable/Disable</button>
                        </div>
                        
                    </>
                )
            },
        },
    ]

    const userRows = users.map((us, index) => ({
        id: index + 1,
        idUser: us.id,
        pic: us.image,
        fullName: us.fullName,
        email: us.email,
        active: us.active,
    }))

    // <div className={st.userTitleContainer}>
    //   <Link to='/adminView/newUser'>
    //     <button className={st.userAddButton}>Create</button>
    //   </Link>
    // </div>

    return (
        <div className={st.userList}>

            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
