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
  seartchClothes: '',
  productsFiltered: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_CLOTHES:
      let filterNames = state.productsFiltered.filter((e) => {
        return (e.name.toUpperCase().includes(action.payload.toUpperCase()));
      });
      return {
        ...state,
        productsFiltered: filterNames,
        seartchclothes: action.payload,
      };

    case ALL_CLOTHES:
      return {
        ...state,
        allClothes: action.payload,
        productsFiltered: action.payload,
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
