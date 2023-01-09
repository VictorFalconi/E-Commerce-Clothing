import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clothesDetail } from "../../redux/actions"
// import styles from "./clothesDetail.module.css"
const ClothingDetail = () => {
    const dispatch = useDispatch()
    const param = useParams()
    const clothes = useSelector(state => state.clothesDetail)

    useEffect(() => {
        dispatch(clothesDetail(param?.id))
    },[])

    //console.log(clothes)

    return(
        <div>
            <h2>{clothes?.name}</h2>
            <img src={clothes?.image}></img>
            <p>Temporada {clothes?.season}</p>
            <p>Precio {clothes?.price}</p>
            <p>Marca {clothes?.brand}</p>
            <p>Modelo {clothes?.model}</p>
            <p>Talles {clothes?.sizes?.map(e => e).join(', ')}</p>

        </div>
    )
}

export default ClothingDetail