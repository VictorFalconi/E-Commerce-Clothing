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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', gap: '20px', marginBottom: '20px'}}>
            <h1 style={{fontSize: '22px', fontWeight: '700'}}>Feedback</h1>
            {rate.length? rate.map((e)=>{
                return(
                <div key={e._id} style={{display: 'flex', flexDirection: 'column', width: '600px', borderRadius: '16px', backgroundColor: '#FFFFFF', gap: '10px', padding: '10px', boxShadow: '2px 2px 2px black'}}>
                    <button onClick={()=>remove(e.userId)} style={{marginLeft: 'auto'}}>X</button>          
                    <h2 >User ID: {e.userId}</h2>
                    <h2 >Score: {e.score}</h2>
                    <h2 >Comment: {e.comment}</h2>
                </div>
                )
            }):'There is no feedback'}        
        </div>
    )
}

export default Feedback;