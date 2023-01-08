import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, SEARCH_CLOTHES } from "./cases";

const initialState = {
  loading: true,
  allCloshes: [],
  category: [],
  clothesDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_CLOTHES:
      return {
        ...state,
        clothes: action.payload,
      };

    case ALL_CLOTHES:
      return {
        ...state,
        allCloshes: action.payload
      }
    
      case CATEGORIES: 
      return {
        ...state,
        category: action.payload

      }

      case CLOTHES_DETAIL:
        return {
          ...state,
          clothesDetail: action.payload
        }

    default:
      return state;
  }
};

export default reducer;

