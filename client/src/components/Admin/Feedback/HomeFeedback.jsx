import React, { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { getRate  } from '../../../redux/actions';


function HomeFeedback() {
    const dispatch = useDispatch();
    const rate = useSelector(state => state.rate_us);

    useEffect(() => {
        dispatch(getRate())
    }, [])


    
    return (
        <div>Este es para armar el carrusel de reviews
            {rate.length?'aca habria que hacer un map o un carrusel o lo que sea':''}
        </div>
    )
}

export default HomeFeedback;