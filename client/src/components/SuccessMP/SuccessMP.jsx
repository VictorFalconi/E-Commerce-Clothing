import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { updateStock } from "../../redux/actions";

const SuccessMP = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        cart.map((p)=>{
            dispatch(updateStock(p));
        })
    
     dispatch({ type: "CLEAR_CART" })
    }, []);
    return (
        <h1>Gracias por tu compra!!!!! dejanos un comentario de la experiencia</h1>
    )
}

export default SuccessMP