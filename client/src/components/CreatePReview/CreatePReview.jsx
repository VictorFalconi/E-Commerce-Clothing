import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import st from './CreateReviews.module.css';
import { createProductReview, clothesDetail } from '../../redux/actions';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./CreateReviewsStyles";
import { useParams } from 'react-router-dom';


function CreatePReviews(){
    const {id,userId}=useParams()
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(clothesDetail(id))
    },[])
    const productDetail= useSelector((state)=>state.clothesDetail)
    console.log(productDetail)
    
    const [input, setInput] = useState({
        score: 5,
        comment: ''
    })

    const [errors, setErrors] = useState({})

    const [rate, setRate] = useState(0);

    function validate(input){
        let errors = {};
        if(!input.score){
            errors.score = 'Score the product'
        }
        return errors;
    }


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            userId:userId,
            productId:id

        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    function handleSubmit(e){
        e.preventDefault();
        if(!errors.score  && input.score !== ''){
            dispatch(createProductReview(input));
            setInput({
                score: 5,
                comment: ''
            })
            alert('Review successfully created')
        }else {
            alert('Score field must be fulfilled')
        }
    }

    return(
        <>
        <div>
            <div className={st.Container}>
                {/* <h1 className={st.title}>Score our product and comment your experience</h1> */}

                <div className={st.topInfo}>

                {productDetail?.name?
                    <div className={st.productInfo}>
                        <h3>{productDetail.name}</h3>
                        <img className={st.productImg} src={productDetail?.image[0]}/>
                        <span className={st.productDescription}>{productDetail.description}</span> 
                        </div>
                        :null}
                    <Container>
                        {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;
                            
                            return (
                                <label>
                                <Radio
                                name='score'
                                id='score'
                                type="radio"
                                value={givenRating}
                                onClick={() => {
                                    setRate(givenRating);
                                    setInput({...input, score:givenRating})
                                }}
                                />
                                <Rating className={st.stars}>
                                <FaStar
                                    color={
                                        givenRating < rate || givenRating === rate
                                        ? "rgb(212, 175, 55)"
                                        : "rgb(192,192,192)"
                                    }
                                    />
                                </Rating>
                            </label>
                            );
                        })}
                    </Container>
                    {errors.score ? <p>{errors.score}</p> : null}
                </div>
                <div className={st.bottomInfo}>
                    <form className={st.labels} >
                        <div className={st.propertiesBox}>
                            <h6>Add your comment</h6>
                            <p className={st.op}>(Optional)</p>
                            <textarea className={st.textarea} name='comment' type='text' value={input.comment} id='comment' onChange={(e) => handleChange(e)} placeholder='Comment about your product'></textarea>
                        </div>
                        <div>
                            <input className={st.send} type='button' value='Send' onClick={handleSubmit}/>
                        </div>
                    </form> 
                </div>
            
            </div>
        </div>
        </>
    )
}
export default CreatePReviews;