import React, { useEffect } from 'react'
import st from './ProductsList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { editProductActiveProp, getClothesAdmin } from '../../../redux/actions'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'



export default function ProductsList() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getClothesAdmin())
    }, [getClothesAdmin])

    const allItems = useSelector((state) => state.allClothes)

    


    // console.log('SOY TODOS LOS PRODUCTOS: ', allItems)

    const columns = [
        { field: 'id', headerName: 'ID', width: 92 },
        // { field: 'image', headerName: 'Image', width: 120, renderCell: (params)=>{
        //   return (
        //     <div className={st.productListItem}>
        //       <img classname={st.productListImg} src={params.row.pic} alt='' />
        //       {params.row.name}
        //     </div>
        //   )
        // }},
        { field: 'idProd', headerName: 'Prod. ID', width: 135 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        { field: 'category', headerName: 'Category', width: 135 },
        { field: 'active', headerName: 'Active', width: 117 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 125,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={'/admin/product/' + params.row.idProd}
                            className=' no-underline'
                        >
                            <button className={st.productListEdit}>
                                Details
                            </button>
                        </Link>
                        
                    </>
                )
            },
        },
    ]

    const itemsRows = allItems.map((it, index) => ({
        id: index + 1,
        idProd: it._id,
        name: it.name,
        brand: it.brand,
        category: it.category,
        active: it.active,
    }))

    // <div className={st.userTitleContainer}>
    //   <Link to='/adminView/newUser'>
    //     <button className={st.userAddButton}>Create</button>
    //   </Link>
    // </div>

    return (
        <div className={st.productList}>

            <DataGrid
                rows={itemsRows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}