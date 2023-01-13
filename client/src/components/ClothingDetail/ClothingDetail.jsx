import React, { useEffect, useState, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams,useNavigate  } from "react-router-dom"
import { addCart, clothesDetail, getPReviews } from "../../redux/actions"
import Cart from "../Cart/Cart.jsx";
import StarIcon  from '../../icons/StarIcon.svg'
import StarIconFill from '../../icons/starIconFill.svg'

import styles from "./ClothingDetail.module.css"

function ClothingDetail (product){
    const dispatch = useDispatch()

    const param = useParams()
    const clothes = useSelector(state => state.clothesDetail)
    const reviews = useSelector((state) => state.reviews)
    const [promedReviews, setPromedReviews] = useState(0)
    const [countReviews, setCountReviews] = useState(0)
    let navigate = useNavigate()
    const routeChange = () => {
        let path = "/cardReviews";
        navigate(path)
    }
    useEffect(() => {
        if(reviews.length === 0) {
            dispatch(getPReviews())
        }
        let reviewsPId = reviews.filter((e) => e.productId === product.id)
        // console.log('reviewsPId***//////////------------++++++++++++', reviewsPId)

        if (reviewsPId.length !== 0) {
            // console.log('products reviews---------------/////////////////', product.reviews)
            let count = reviewsPId.length
            let sumaReviews = 0
            reviewsPId.map((r) => {
                sumaReviews += r.score
            })
            let promedioReviews = sumaReviews / count
            setPromedReviews(promedioReviews)
            setCountReviews(count)
        }
        dispatch(clothesDetail(param?.id))
    },[])

    //console.log(clothes)

    const handleCart = (clothes) => {
        dispatch(addCart(clothes))
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

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
                          Reviews
                            <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                            <div className="flex items-center">
                             {
                            [...Array(5)].map((rating, i) => {
                            return (
                            promedReviews > i ? (
                                                                        
                             <img 
                             src={StarIconFill}
                             key={i}
                             className={classNames(
                             'h-5 w-5 flex-shrink-0'
                             )}/>
                             ): (
                            <img 
                            src={StarIcon}
                             key={i}
                            className={classNames(
                           'h-5 w-5 flex-shrink-0'
                            )}/>
                            ) 
                            )
                            })
                            }              
                            </div>
                           <p className="sr-only">{promedReviews} out of 5 stars</p>
                           <button type="button" onClick={routeChange}className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                           {countReviews} reviews
                           </button>
                           </div>
                            </div>

            <button className={styles.btn} onClick={() => handleCart(clothes)}>Agregar a la bolsa</button> 
                         
            </div>
        </div>
    )
}

export default ClothingDetail

//LINEA 32 DEBE SER EL CAUSANTE DEL ERROR


/* <button className={styles.btn} onClick={() => addToCart(clothes)}>Add to bag</button> */
