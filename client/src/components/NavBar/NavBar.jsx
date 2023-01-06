import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return(
        <div>
            <button onClick={handleClick}>Logo que redirige hacia la Home</button>
            Esta es la NavBar
            <Link to='/newProduct'>New Product</Link>
        </div>
    )
}

export default NavBar