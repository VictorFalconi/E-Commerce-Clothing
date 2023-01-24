import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import st from './HelpUsImprove.module.css'
import { createComments } from '../../redux/actions.js';
import Footer from '../Footer/Footer';



export default function HelpUsImprove() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const dispatch = useDispatch()

    const [Message, setMessage] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setMessage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (e.target.name === 'update') {
            dispatch(createComments(Message))
            setMessage({
                name: '',
                email: '',
                message: '',
            })
        alert('Thank you for your feedback')
        }
    };

    return (

        <div className={st.container}>
            <div className= {st.titlePage}>
                <h2 className=""> Your comment is all what matters </h2>
            </div>

            <div className={st.formCont}>

                <form  onSubmit={handleSubmit}>

                    <div className={st.InputForm}>
                        <label className=' font-bold whitespace-pre-wrap'>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        onChange={handleChange} 
                        placeholder="Enter your name"
                        className={st.inputField} />
                    </div>
                    <div className={st.InputForm}>
                        <label className=' font-bold whitespace-pre-wrap'>Email</label>
                        <input 
                        type={"email"} 
                        name="email" 
                        onChange={handleChange} 
                        placeholder="Enter your email"
                        className={st.inputField} />
                    </div>
                    <div className={st.InputForm}>
                        <label className=' font-bold whitespace-pre-wrap'>Message</label>
                        <textarea 
                        type="text" 
                        name="message" 
                        onChange={handleChange} 
                        placeholder="Write your comment"
                        className={st.inputField} />
                    </div>

                    <div className={st.InputButtonForm}>
                        <button 
                        className={st.send}
                        disabled = {Message.message === ""}
                        name='update' 
                        ref={target} 
                        type="submit" 
                        onClick={(e) => {
                            handleSubmit(e);
                            setShow(!show);
                        }}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}