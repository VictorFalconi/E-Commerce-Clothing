import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes, Navigate } from "react-router-dom"
import ClothingDetail from "./components/ClothingDetail/ClothingDetail"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import NewProduct from "./components/NewProuct/NewProduct"
import SearchBar from "./components/Search Bar/SearchBar"
import { allClothes, categories } from "./redux/actions"
import Filters from "./components/Filters/Filters";
import { LoginButton } from "./components/Login/Login";
import { useAuth0 } from "@auth0/auth0-react"
import Admin from "./components/Admin/Admin"
import Cart from "./components/Cart/Cart"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(allClothes())
    // dispatch(categories())
  },[])
  const { user }  = useAuth0();

  return (
    <div>
      <NavBar></NavBar> 
      <Filters></Filters>
      <Cart />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/searchResults/:name" element={<SearchBar/>}></Route>
        <Route path="/:id" element={<ClothingDetail/>}></Route>
        <Route path="/newProduct" element={user ? <NewProduct/> : <LoginButton/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
        <Route path="/admin" element={user? <Admin/> : <LoginButton/>}/>
      </Routes>
    </div>
  )
}

export default App
