import React, { useEffect, useState  } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import { addRate } from '../../redux/actions';

function RateUs() {
    const { user } = useAuth0();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const email = user?.email;
    const logged = users?.filter((u) => u.email === email);

    const [feedback, setFeedback] = useState({
        userId: logged[0]?._id,
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