//  import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, CREATE_PRODUCT, SEARCH_CLOTHES, FILTER, RESET_FILTERS, ORDER_BY } from "./cases";

const initialState = {
  loading: true,
  allClothes: [],
  category: [],
  clothesDetail: [],
  productsFiltered: [],
  currentOrder: "",
  brandFilteredMemory: [],
  seartchClothes: [],
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CLOTHES':
      return {
        ...state,
        seartchClothes: action.payload,
      };

    case "ALL_CLOTHES":
      return {
        ...state,
        allClothes: action.payload,
      };

    case "CATEGORIES":
      return {
        ...state,
        category: action.payload,
      };

    case "CLOTHES_DETAIL":
      return {
        ...state,
        clothesDetail: action.payload,
      };

    // aqui el filtro

    //-----------------------------------------------------------------------------------------
    case "ORDER_BY":
      const ordenV = action.payload === "asc"
          ? [...state.productsFiltered].sort(function (a, b) {
              if (a.name > b.name) { return 1;}
              if (b.name > a.name) { return -1;}
              return 0;
            }) : 
            [...state.productsFiltered].sort(function (a, b) {
              if (a.name > b.name) { return -1; }
              if (b.name > a.name) { return 1; }
              return 0;
          })
      return {
        ...state,
        currentOrder: ordenV,
      };

    //---------------------------------------------------------------------------------------------

    case "CREATE_PRODUCT":
      return {
        ...state,
        allClothes: action.payload,
      };

    case "ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "UPDATE_USER_STATUS":
      return {
        ...state,
        users: action.payload,
      };
      case 'CREATE_USER':
        return{
          ...state,
          users: action.payload,
        };

    default:
      return state;
  }

  
};

export default reducer;
