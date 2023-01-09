import {
  ALL_CLOTHES,
  CATEGORIES,
  CLOTHES_DETAIL,
  CREATE_PRODUCT,
  SEARCH_CLOTHES,
} from "./cases";

const initialState = {
  loading: true,
  allClothes: [],
  category: [],
  clothesDetail: [],
  seartchClothes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_CLOTHES:
      console.log(action.payload)
      return {
        ...state,
        seartchClothes: action.payload,
      };

    case ALL_CLOTHES:
      return {
        ...state,
        allClothes: action.payload,
      };

    case CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };

    case CLOTHES_DETAIL:
      return {
        ...state,
        clothesDetail: action.payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        allClothes: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
