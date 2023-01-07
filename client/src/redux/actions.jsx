import { 
SEARCH_CLOTHES,
} from "./cases"
import axios from 'axios'

export function searchClothes(name){
    return async function(dispatch){
    try {
    var clothes = await axios();
    return dispatch({
        type: SEARCH_CLOTHES,
        payload: clothes.data
    })    
}
catch(error) {
    alert ("not found")
} 
}
}
