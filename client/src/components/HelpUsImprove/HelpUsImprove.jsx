import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import st from './HelpUsImprove.module.css'
import { createComments } from '../../redux/actions.js';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';



export default function HelpUsImprove() {
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
            Swal.fire({
                title: '¡Thank you for your feedback!',
                icon: 'success'
            })
            .then((willReload) => {
                if (willReload) {
                  window.location.reload();
                }
            });
        }
    setMessage({})
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
                        value={Message.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name"
                        className={st.inputField} />
                    </div>
                    <div className={st.InputForm}>
                        <label className=' font-bold whitespace-pre-wrap'>Email</label>
                        <input 
                        type={"email"} 
                        name="email" 
                        value={Message.email}
                        onChange={handleChange} 
                        placeholder="Enter your email"
                        className={st.inputField} />
                    </div>
                    <div className={st.InputForm}>
                        <label className=' font-bold whitespace-pre-wrap'>Message</label>
                        <textarea 
                        type="text" 
                        name="message" 
                        value={Message.message}
                        onChange={handleChange} 
                        placeholder="Write your comment"
                        className={st.inputField} />
                    </div>

                    <div className={st.InputButtonForm}>
                        <button 
                        className={st.send}
                        disabled = {Message.message === ""}
                        name='update'  
                        type="submit" 
                        onClick={(e) => {handleSubmit(e)}}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}