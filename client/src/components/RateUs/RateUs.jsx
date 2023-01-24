import React, { useEffect, useState  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRate, getRate, gateRateById} from '../../redux/actions';

// {
//     id: 654654,
//     score: 654,
//     comment: ''
// }

   

function RateUs() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.usersDetails);
    const rate = useSelector(state => state.rate_us);
    const [feedback, setFeedback] = useState({
        userId: user._id,
        score:0,
        comment:''
    })
        
    function handleRate(e) {
        e.preventDefault()
        setFeedback({
            ...feedback,
            score:e.target.value
        })        
    }
    function handleComment(e) {
        e.preventDefault()
        setFeedback({
            ...feedback,
            comment:e.target.value
        })        
    }
    function handleSubmit(e) {
        e.preventDefault()
       dispatch(addRate(feedback))
       console.log(feedback)

    }
    
    return (
        <div>
            <h1>Componente review compra</h1>
            <div>
                <select  onChange={handleRate}>
                    <option value='All rates'>All rates</option>
                    <option value='5'>5  ☆</option>
                    <option value='4'>4  ☆</option>
                    <option value='3'>3  ☆</option>
                    <option value='2'>2  ☆</option>
                    <option value='1'>1  ☆</option>
                </select>
            </div>
            <div><input type='text' placeholder='Ingrese su comentario' onChange={handleComment}/></div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default RateUs;