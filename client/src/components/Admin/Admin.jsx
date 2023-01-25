import styles from './Admin.module.css';
import { Routes, Route } from 'react-router-dom';
import { Profile } from "../Login/Profile";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { allUsers, updateUserStatus } from '../../redux/actions';
import HomeAdmin from './HomeAdmin/HomeAdmin'
import AdminNavBar from './components/AdminNavBar';
import AdminSideBar from './components/AdminSideBar';
import ProductList from './products/ProductsList';
import Product from './products/Product';
import NewProduct from './products/NewProduct';
import UserList from './User/UserList';
import HelpUsToImprove from './HelpUsToImprove/HelpUsToImprove';
import NavBar from '../NavBar/NavBar';
import UserProfile from '../User/UserProfile';
import BuggyHistory from './HistoryBuggy/HistoryBuggy';
import Feedback from './Feedback/Feedback';




const Admin = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const { user }  = useAuth0();
    const admin = false;
    const [load, setLoad] = useState(true)
    
    const verificacionadmin = ()=>{
        const email = user.email
        const check = users.filter((u)=> u.email === email)
        if(check[0]?.admin) {
            return (
                <React.Fragment>
                    <NavBar></NavBar>
                    <div key={load} className={styles.container}>
                        <AdminSideBar></AdminSideBar>
                        <Routes>
                            <Route exact path='/' element={<UserList setLoad={setLoad} load={load} />}></Route>
                            <Route path="/helpustoimprove" element={<HelpUsToImprove />} />
                            <Route path="/feedback" element={<Feedback />}></Route>
                            <Route path="/products" element={<ProductList />}></Route>
                            <Route path="/product/:productId" element={<Product />} />
                            <Route path="/newProduct" element={<NewProduct />}></Route>
                            <Route path="/users" element={<UserList setLoad={setLoad} load={load}/>}></Route>
                            <Route path="/buggy" element={<BuggyHistory/>}></Route>
                        </Routes>
                    </div>
                </React.Fragment>
            )
        }else{
         return ( 
            <div>
            <NavBar></NavBar>
            <UserProfile></UserProfile>
            </div>
        )}
    
       } 

    return (
        <div>
            {user && verificacionadmin()}
        </div>
    )

}

export default Admin