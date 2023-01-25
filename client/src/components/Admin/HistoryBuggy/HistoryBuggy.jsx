import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { historyBuggy } from '../../../redux/actions';

export default function BuggyHistory() {

    
    const buggies = useSelector((state) => state.history)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(historyBuggy())

    },[])
   
    return (
            <div>
                <h1>History buggies</h1>
                {console.log(buggies)}
            </div>
    )
}
