import React, { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { getRate, deleteRate } from '../../../redux/actions';


function Feedback() {
    const dispatch = useDispatch();
    const rate = useSelector(state => state.rate_us);

    useEffect(() => {
        dispatch(getRate())
    }, [])

    const remove = (id) =>{
        dispatch(deleteRate(id))      
    }
    
    return (
        <div>
            <h1>Componente para que el admin vea los feedbacks</h1>
            {rate.length? rate.map((e)=>{
                return(
                <div key={e._id}>
                    <h2 >User ID: {e.userId}</h2>
                    <h2 >Score: {e.score}</h2>
                    <h2 >Comment: {e.comment}</h2>
                    <button onClick={()=>remove(e.userId)}>X</button>             
                </div>
                )
            }):'no hay feedbacks'}        
        </div>
    )
}

export default Feedback;