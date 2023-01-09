import styles from "./SearchBar.module.css";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { searchClothes } from '../../store/actions';
import lupa from "./assets/lupa_negra.png"


export default function SearchBar() {

    let dispatch = useDispatch()
    const [input, setInput] = useState("")

    function handleChange(e) {
        e.preventDefault()
        setInput(e.target.value)
    }

    function handleSubmit(e) {   
        e.preventDefault()
        // dispatch(searchClothes(input))
        setInput("")
    }

    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            type="text"
            id="title"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            placeholder='Search Clothes'
            value={input}
            />
            <button type='submit'>
            <img src={lupa} className={styles.IconLupa} />
            </button>
        </form>
    )
}