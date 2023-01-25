import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, editUserActiveProp } from '../../../redux/actions'
import st from './UserList.module.css'
import { DataGrid } from '@mui/x-data-grid'


export default function UserList({setLoad, load}) {
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(allUsers())
    }, [allUsers])

    const users = useSelector((state) => state.users)
    
    const handleActive = (e, user) =>{
        dispatch(editUserActiveProp(user.idUser, !user.active))
        setLoad(!load)        
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
                            src={params.row.pic[0]?.secure_url}
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
                            <button  className={st.userListEdit} onClick={(e) => handleActive(e, params.row)}>
                                Enable/Disable
                            </button>
                        </div>
                        
                    </>
                )
            },
        },
    ]

    const userRows = users.map((us, index) => ({
        id: index + 1,
        idUser: us._id,
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
