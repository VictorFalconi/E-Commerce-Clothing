//  import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, CREATE_PRODUCT, SEARCH_CLOTHES, FILTER, RESET_FILTERS, ORDER_BY } from "./cases";

const initialState = {
  loading: true,
  allClothes: [],
  category: [],
  clothesDetail: [],
  productsFiltered: [],
  productsOrdered: [],
  currentOrder: "",
  brandFilteredMemory: [],
  seartchClothes: [],
  users: [],
  azOrder: "Default",
  catFilter: "Default",
  sizeFilter: "Default",
  cart: [],
  imageCloudinary: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CLOTHES":
      return {
        ...state,
        seartchClothes: action.payload,
      };

    case "ALL_CLOTHES":
      return {
        ...state,
        allClothes: action.payload,
        productsFiltered: action.payload,
        productsOrdered: action.payload,
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

    case "azOrder":
      return {
        ...state,
        azOrder: action.payload,
      };

    case "catFilter":
      return {
        ...state,
        catFilter: action.payload,
      };

    case "sizeFilter":
      return {
        ...state,
        sizeFilter: action.payload,
      };

    case "ORDER_BY":
      switch (action.payload) {
        case "AZ":
          return {
            ...state,
            productsOrdered: [...state.allClothes].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
            productsFiltered: [...state.allClothes].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        case "ZA":
          return {
            ...state,
            productsOrdered: [...state.allClothes].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
            productsFiltered: [...state.allClothes].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
          };
        default:
          return {
            ...state,
            productsOrdered: [...state.allClothes],
            productsFiltered: [...state.allClothes],
          };
      }

    case "FILTER":
      switch (action.payload) {
        case "T-shirts":
          return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter(
              (p) => p.category === "T-shirts"
            ),
          };
        case "Shoes":
          return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter(
              (p) => p.category === "Shoes"
            ),
          };
        case "Shorts":
          return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter(
              (p) => p.category === "Shorts"
            ),
          };
        case "Caps":
          return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter(
              (p) => p.category === "Caps"
            ),
          };
        case "L":
          return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter((p) =>
              p.sizes.includes("L")
            ),
          };
        default:
          return {
            ...state,
          };
      }

    //---------------------------------------------------------------------------------------------

    case "CREATE_PRODUCT":
      return {
        ...state,
        // allClothes: action.payload,
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
    case "CREATE_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "CLOUDINARY_IMAGE":
      return {
        ...state,
        imageCloudinary: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
