//  import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, CREATE_PRODUCT, SEARCH_CLOTHES, FILTER, RESET_FILTERS, ORDER_BY, GET_REVIEWS, REVIEWS_FILTER, } from "./cases";

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
  azOrder: 'Default',
  catFilter: 'Default',
  sizeFilter: 'Default',
  cart: [],
  redirectMP: '',
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

    case 'azOrder': return {
      ...state,
      azOrder: action.payload
    }
    case 'catFilter': return {
      ...state,
      catFilter: action.payload
    }

    case 'sizeFilter': return {
      ...state,
      sizeFilter: action.payload
    }

    case "ORDER_BY":
      switch(action.payload) {
        case 'AZ': return {
          ...state,
          productsOrdered: [...state.allClothes].sort(function (a, b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            else return -1
        }),
          productsFiltered: [...state.allClothes].sort(function (a, b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            else return -1
        })
        }
        case 'ZA': return {
          ...state,
          productsOrdered: [...state.allClothes].sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
           else return -1
          }),
          productsFiltered: [...state.allClothes].sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
           else return -1
          })
        }
        default: return {
          ...state,
          productsOrdered: [...state.allClothes],
          productsFiltered: [...state.allClothes]
        }
      };

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
            productsFiltered: [...state.productsFiltered].filter((p) => p.sizes.includes('L'))
          }
          case 'S': return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter((p) => p.sizes.includes('S'))
          }
          case 'M': return {
            ...state,
            productsFiltered: [...state.productsFiltered].filter((p) => p.sizes.includes('M'))
          }
          default: return {
            ...state
          }
        };

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
      case 'REMOVE_CART_PRODUCT':
        const cart = state.cart;
        const newCart = cart.filter((i)=> i.name !== action.payload.name);
        return {
          ...state,
          cart: newCart,
        };

    case "CLOUDINARY_IMAGE":
      return {
        ...state,
        cart: newCart,
      };
      case 'CHECKOUT':
        return {
          ...state,
          redirectMP: action.payload
        };

    default:
      return state;
  }
};

export default reducer;
