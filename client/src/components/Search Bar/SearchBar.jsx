import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchClothes } from '../../redux/actions';


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    // console.log(name)

    useEffect(() => {
        dispatch(searchClothes(name))
    },[name])

    function handleChange(e) {
        setName(e.target.value)
    }
 
    function handleSubmit(e) {   
        e.preventDefault()
        dispatch(searchClothes(name))
    }

    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            type="text"
            id="title"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            placeholder='Search Clothes'
            value={name}
            />
            <button>Search</button>
        </form>
    )
}