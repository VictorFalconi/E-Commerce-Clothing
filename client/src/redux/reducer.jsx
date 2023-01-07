import { 
    SEARCH_CLOTHES,
    } from "./cases"
const initialState = {

loading:true
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SEARCH_CLOTHES:
            return {
                ...state,
                clothes: action.payload
            }

        default: return state
    }
}

export default reducer