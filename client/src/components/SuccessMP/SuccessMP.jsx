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
    dispatch({type: "GET_PURCHASE_HISTORY"})
    dispatch({type: 'SET_REDIRECTMP', payload: ''})
     dispatch({ type: "CLEAR_CART" })
    }, []);
    return (
        <h1>Thank you for the purchase. Leave us a comment about your experience</h1>
    )
}

export default SuccessMP