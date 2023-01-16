import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes, Navigate } from "react-router-dom"
import ClothingDetail from "./components/ClothingDetail/ClothingDetail"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import NewProduct from "./components/Admin/products/NewProduct"
import SearchBar from "./components/Search Bar/SearchBar"
import { allClothes, categories } from "./redux/actions"
import Filters from "./components/Filters/Filters";
import { LoginButton } from "./components/Login/Login";
import { useAuth0 } from "@auth0/auth0-react"
import Admin from "./components/Admin/Admin"
import Cart from "./components/Cart/Cart"
import ProductReview from './components/ProductReview/ProductReview'
import styles from './App.module.css'
import Background from "./components/Background/Background"
import { useLocation } from "react-router-dom"
// import CreatePReview from './components/CreatePReview/CreatePReview'

function App() {

  const dispatch = useDispatch();
  const { user } = useAuth0();
  const location = useLocation();

 


  return (
    <div className={styles.appContainer}>
      <Background></Background>
      {!location.pathname.includes("/admin") && <NavBar></NavBar>}
      {!location.pathname.includes("/admin") && <Filters></Filters>}
      <Routes>
      
          <Route path="/" element={<Home/>}></Route>
          <Route path="/searchResults/:name" element={<SearchBar/>}></Route>
          <Route path="/:id" element={<ClothingDetail/>}></Route>
          <Route path="/newProduct" element={user ? <NewProduct/> : <LoginButton/>}/>
          <Route path="*" element={<Navigate to='/'/>}/>
          <Route path='/cart' element={<Cart/>}/>
        <Route path="/admin//*" element={user? <Admin/> : <LoginButton/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/cardReviews" element={<ProductReview />}/>
      </Routes>
    </div>
  )
}







export default App
