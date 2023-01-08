import { ALL_CLOTHES, SEARCH_CLOTHES } from "./cases";

const initialState = {
  loading: true,
  allCloshes: []
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

    default:
      return state;
  }
};

export default reducer;

