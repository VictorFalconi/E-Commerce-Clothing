import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clothesDetail } from "../../redux/actions"
import Cart from "../Cart/Cart.jsx";

import styles from "./ClothingDetail.module.css"

const ClothingDetail = () => {
    const dispatch = useDispatch()
    const param = useParams()
    const clothes = useSelector(state => state.clothesDetail)

    useEffect(() => {
        dispatch(clothesDetail(param?.id))
    },[])

    //console.log(clothes)

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>{clothes?.name}</h2>
                <img src={clothes?.image}></img>
                <p className={styles.price}>${clothes?.price}</p>
                <p>Season: {clothes?.season}</p>
                <h3>{clothes?.brand}</h3>
                <p>Model: {clothes?.model}</p>
                <p>Sizes:</p>
                <p>{clothes?.sizes?.map(e => e).join(', ')}</p>

            <button className={styles.btn} onClick={() => props.addToCart(clothes)}>Agregar a la bolsa</button> 
                         
            </div>
        </div>
    )
}

export default ClothingDetail

//LINEA 32 DEBE SER EL CAUSANTE DEL ERROR


/* <button className={styles.btn} onClick={() => addToCart(clothes)}>Add to bag</button> */
