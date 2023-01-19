import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import st from './EditingProduct.module.css';
import Cloudinary from '../../Cloudinary/Cloudinary';
import { categories, updateProduct } from '../../../redux/actions';

function EditProduct ({changePage}) {
    const dispatch = useDispatch();

    const pInfo = useSelector(state => state.clothesDetail)
    const category = useSelector(state => state.category)

    useEffect(() => {
        dispatch(categories())
    }, [])

    let info = {};

    if(pInfo.brand && pInfo.category && pInfo.sizes) {
        info = {
            id: pInfo._id,
            name: pInfo.name,
            category: pInfo.category,
            description: pInfo.description,
            brand: pInfo.brand,
            price: pInfo.price,
            image: pInfo.image,
            stock: pInfo.stock,
            active: pInfo.active
        }
    } else {
        console.log('ke pasoo')
    }

    const [input, setInput] = useState({});
    const [nav, setNav] = useState(false);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeCategory = (e) => {
        if(e.target.name === "category"){
            const cat = category.filter((cate) => cate.name === e.target.value)
            setInput({
                ...input,
                [e.target.name]: cat
            })
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if(e.target.name === 'update'){
            dispatch(updateProduct(info.id, input))
            setNav(true)
        }
    }

    return (
        <div className={st.productUpdate}>
            <span className={st.productUpdateTitle}>Edit</span>
            <div className={st.productUpdateContainer}>
                <form onSubmit={handleUpdate}>
                    <div className={st.productUpdateForm}>
                        <div className={st.productUpdateItem}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder={info.name}
                                className={st.productUpdateInput}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={st.productUpdateItem}>
                            <label>Brand</label>
                            <input
                            name="brand"
                            defaultValue=""
                            placeholder={info.brand}
                            className={st.productUpdateInput}
                            onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={st.productUpdateItem}>
                            <label>Category</label>
                            <select
                            name="category"
                            defaultValue=""
                            className={st.productUpdateInput}
                            onChange={(e) => handleChangeCategory(e)}
                            >
                            <option hidden value=""> {info.category} </option>
                            {category && category.map(cat => (
                                <option name={cat.name} value={cat.name} key={cat.name}>{cat.name}</option> 
                                )) 
                            }
                            </select>
                        </div>
                        <div className={st.productUpdateItem}>
                            <label>Description</label>
                            <textarea
                                type="text"
                                name="description"
                                placeholder={info.description}
                                className={st.productUpdateInput}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        
                        <div className={st.productUpdateItem}>
                            <label>Price</label>
                            <input
                                type="number"
                                name="price"
                                placeholder={info.price}
                                className={st.productUpdateInput}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={st.productUpdateItem}>
                            <label>Active</label>
                            <select
                                name="active"
                                defaultValue=""
                                className={st.productUpdateInput}
                                onChange={(e) => handleChange(e)}
                            >
                                <option hidden value="">
                                {String(info.active)}
                                </option>
                                <option name="true" value="true">
                                    Enable
                                </option>
                                <option name="false" value="false">
                                    Disable
                                </option>
                            </select>
                        </div>
                        <div className={st.productUpdateItem}>
                            <div className={st.productUpdateUpload}>
                                <img
                                    className={st.productUpdateImg}
                                    src={info.image}
                                    alt="Product Img"
                                />
                                <label htmlFor="file">
                                    <Cloudinary
                                        setEditInput={setInput}
                                        editInput={input}
                                    /> 
                                </label>
                                <input
                                    name="image"
                                    type="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className={st.buttons}>
                    <button
                        onClick={changePage}
                        className={st.productBackButton}
                        >
                        Back
                    </button>
                    <button
                        name="update"
                        onClick={handleUpdate}
                        className={st.productUpdateButton}
                        >
                        Update
                    </button>
                </div>
            </div>

            {nav ? <Navigate to={'/admin/products/'} /> : null}
        </div>
    )
    

}

export default EditProduct;
