import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRate, getRate } from '../../redux/actions';



function RateUs() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getRate());
    }, []);
    
    return (
        <div>
            <h1>Componente review compra</h1>
            
        </div>
    )
}

export default RateUs; 