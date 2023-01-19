/*eslint-disable */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getPReviews, reviewsFilter } from '../../redux/actions';
import st from './ReviewCard.module.css';
import { Container } from "../CreatePReview/CreateReviewsStyles";
import { StarIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';



function ProductReview() {
    const dispatch = useDispatch()
    // const product = useSelector((state) => state.details)
    // const reviews = useSelector(state => state.reviews)
    const product = useSelector((state) => state.allClothes)
    const reviews = useSelector(state => state.reviews)
    const filteredReviews = useSelector(state => state.filteredReviews)
    let navigate = useNavigate()
    const ids = useSelector(state => state.idprodreviews)
    console.log(ids)
    
    


    React.useEffect(() => {
        dispatch(reviewsFilter('All rates'))
        if(!reviews.length){
        dispatch(getPReviews())
        }
    }, [])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function handleReviewsFilter(e) {
        e.preventDefault()
        dispatch(reviewsFilter(e.target.value))
    }



    const routeChange = () => {
        let path = "/";
        navigate(path)
    }

    return (
        <div>
            <button className={st.button} onClick={routeChange}>←</button>
            <div className={st.Container} >
                <div>
                <h1 className={st.title}>Reviews</h1>
                <div className={st.filterContainer}>
                    <select className={st.filter} onChange={handleReviewsFilter}>
                        <option value='All rates'>All rates</option>
                        <option value='5'>5  ☆</option> 
                        <option value='4'>4  ☆</option>
                        <option value='3'>3  ☆</option>
                        <option value='2'>2  ☆</option>
                        <option value='1'>1  ☆</option>
                    </select>
                </div>
                {
                    (filteredReviews.length) ?
                    <div>
                        {filteredReviews.filter(r => r.productId === ids)
                        ?.map((review) => {
                            return (
                                <div className={st.card}>
                                    <Container className={st.starsCont}>
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon 
                                            key={rating}
                                            className={classNames(
                                                review.score > rating ? 'text-yellow-600' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0',
                                                st.stars
                                            )}
                                            aria-hidden="true"
                                            />
                                        ))}
                                    </Container>
                                    <div>
                                        {review.comment?.charAt(0).toUpperCase() + review.comment?.slice(1)}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                :
                    <div className={st.noResults}>
                        <h3>No results</h3>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}
export default ProductReview;