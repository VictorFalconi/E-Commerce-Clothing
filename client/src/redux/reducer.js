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
  usersDetails: [],
  userProfileUpdate: '',
  azOrder: 'Default',
  catFilter: 'Default',
  sizeFilter: 'Default',
  brandFilter: 'Default',
  favFilter: {value: 'Default', email: 'invitado'},
  cart: [],
  redirectMP: '',
  imageCloudinary: [],
  cloudinaryProfile: [],
  reviews: [],
  reviews_copy:[],
  idprodreviews: '',
  filteredReviews: [],
  comments: [],
  favorites: {},
  history: [],
  rate_us: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CLOTHES":
      return {
        ...state,
        seartchClothes: action.payload,
      };
      case "CLEAN_SEARCH_CLOTHES":
      return {
        ...state,
        seartchClothes: [],
      };
    case "ALL_CLOTHES":
      return {
        ...state,
        allClothes: action.payload.filter(p => p.active === true),
        clothesDetail: [],
        productsFiltered: action.payload.filter(p => p.active === true),
        productsOrdered: action.payload.filter(p=> p.active === true)
      };

    case 'GETCLOTHES_ADMIN':
      return {
        ...state,
        allClothes: [...action.payload],
        productsFiltered: [...action.payload],
        productsOrdered: [...action.payload]
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

    case 'brandFilter': return {
      ...state,
      brandFilter: action.payload
    }

    case 'favFilter': return {
      ...state,
      favFilter: action.payload
    }

    case "ORDER_BY":
      switch(action.payload) {
        case 'AZ': return {
          ...state,
          productsOrdered: [...state.allClothes].sort(function (a, b){
            if (a?.name?.toLowerCase() > b?.name?.toLowerCase()) return 1
            else return -1
        }),
          productsFiltered: [...state.allClothes].sort(function (a, b){
            if (a?.name?.toLowerCase() > b?.name?.toLowerCase()) return 1
            else return -1
        })
        }
        case 'ZA': return {
          ...state,
          productsOrdered: [...state.allClothes].sort(function(a, b) {
            if (a?.name?.toLowerCase() < b?.name?.toLowerCase()) return 1;
           else return -1
          }),
          productsFiltered: [...state.allClothes].sort(function(a, b) {
            if (a?.name?.toLowerCase() < b?.name?.toLowerCase()) return 1;
           else return -1
          })
        }
        case 'LH': return {
          ...state,
          productsOrdered: [...state.allClothes].sort(function (a, b){
            if (a?.price > b?.price) return 1
            else return -1
        }),
          productsFiltered: [...state.allClothes].sort(function (a, b){
            if (a?.price > b?.price) return 1
            else return -1
        })
        }
        case 'HL': return {
          ...state,
          productsOrdered: [...state.allClothes].sort(function(a, b) {
            if (a?.price < b?.price) return 1;
           else return -1
          }),
          productsFiltered: [...state.allClothes].sort(function(a, b) {
            if (a?.price < b?.price) return 1;
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
            (p) => p?.category?.toLowerCase() === "t-shirts"
          ),
        };
        case "Shoes":
        return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter(
            (p) => p?.category?.toLowerCase() === "shoes"
          ),
        };
        case "Shorts":
        return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter(
            (p) => p?.category?.toLowerCase() === "shorts"
          ),
        };
        case "Caps":
        return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter(
            (p) => p?.category?.toLowerCase() === "caps"
          ),
        };
        case "L":
        return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('L'))
        }
        case 'S': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('S'))
        }
        case 'M': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('M'))
        }
        case '8': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('8 US'))
        }
        case '8.5': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('8.5 US'))
        }
        case '9': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('9 US'))
        }
        case '9.5': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('9.5 US'))
        }
        case '10': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('10 US'))
        }
        case '38': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('38'))
        }
        case '39': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('39'))
        }
        case '40': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('40'))
        }
        case '41': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.sizes?.includes('41'))
        }
        case 'Adidas': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.brand?.toLowerCase().includes('adidas'))
        }
        case 'Nike': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.brand?.toLowerCase().includes('nike'))
        }
        case 'Gucci': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.brand?.toLowerCase().includes('gucci'))
        }
        case 'Tommy': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => p?.brand?.toLowerCase().includes('tommy hilfiger'))
        }
        default: return {
          ...state
        }
      };

    case 'FILTER_FAV':
      switch(action.payload.value) {
        case 'Favorites': return {
          ...state,
          productsFiltered: [...state.productsFiltered].filter((p) => state.favorites[action.payload.email].includes(p?._id))
        }
        default: return {
          ...state
        }
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
        users: [...state.users,action.payload]
      };
    case "GET_USER_PROFILE":
      return {
        ...state,
        usersDetails: action.payload
      }
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
    case 'CLEAR_CART': 
        return {
          ...state,
          cart: []
        }

    case "CLOUDINARY_IMAGE":
      return {
        ...state,
        imageCloudinary: action.payload,
        // cart: newCart,
      };
    case 'CLOUDINARY_PROFILE':
      return{
        ...state,
        cloudinaryProfile: action.payload
      }

      case 'CHECKOUT':
        return {
          ...state,
          redirectMP: action.payload
        };
        case 'SIZE_DELETE':
          return {
            ...state,
            sizeDelete: action.payload
          };

// ----------------------------------Reviews------------------------------------
      case 'GET_REVIEWS':
        return ({
          ...state,
          reviews: action.payload,
          reviews_copy: action.payload
      })

      case "OPEN_DETAIL":
            return ({
              ...state,
              idprodreviews: action.payload,
      })

      case "REVIEWS_FILTER":
        const reviews = state.reviews_copy
        if (action.payload === 'All rates') {
            return ({
                ...state,
                filteredReviews: reviews
            })
        } else if (action.payload === '5') {
            const filter = reviews.filter(r => r.score === 5)
            return ({
                ...state,
                filteredReviews: filter
            })
        } else if (action.payload === '4') {
            const filter = reviews.filter(r => r.score === 4)
            return ({
                ...state,
                filteredReviews: filter
            })

        } else if (action.payload === '3') {
            const filter = reviews.filter(r => r.score === 3)
            return ({
                ...state,
                filteredReviews: filter
            })
        } else if (action.payload === '2') {
            const filter = reviews.filter(r => r.score === 2)
            return ({
                ...state,
                filteredReviews: filter
            })

        } else if (action.payload === '1') {
            const filter = reviews.filter(r => r.score === 1)
            return ({
                ...state,
                filteredReviews: filter
            })
        }
    case 'SET_REDIRECTMP': 
        return {
          ...state,
          redirectMP: action.payload
        }
        case 'GET_PURCHASE_HISTORY': 
        return {
          ...state,
          purchaseHistory: action.payload
        }
    case 'GET_COMMENTS':
        return {
          ...state,
          comments: action.payload
        }
    case 'ADD_FAVORITE': {
        const user = action.payload.userId;
        const product = action.payload.productId;
        const userFavorites = state.favorites[user];
        if(userFavorites)
        return {
          ...state,
          favorites: {...state.favorites, [user || 'invitado']: [...state.favorites[user], product]}
        }
        else 
        return {
          ...state,
          favorites: {...state.favorites, [user || 'invitado']: [product]}
        }}
        case 'REMOVE_FAVORITE': {
          const user = action.payload.userId;
          const product = action.payload.productId;
          return {
            ...state,
            favorites: {...state.favorites, [user || 'invitado']: state.favorites[user].filter(p => p !== product)}
          }}

         //-----------History Buggy-----------------------

         case 'GET_HISTORY_BUGGY':
          return {
            ...state,
            history: action.payload
          };  

          case 'GET_HISTORY_USER':
          return {
            ...state,
            history: action.payload
          };
          //-------------rate us-------------------------
          case 'GET_RATE':
            return {
              ...state,
              rate_us: action.payload
            };
          case "ADD_RATE":
            return {
              ...state,
              rate_us: [...state.rate_us, action.payload],
            };
            case "DELETE_FEEDBACK":
            return {
              ...state,
              rate_us: action.payload,
            };


    default:
      return state;
  }
};

export default reducer;
