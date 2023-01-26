import { AlternateEmail } from "@mui/icons-material";
import axios from "axios";

// import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, SEARCH_CLOTHES, CREATE_PRODUCT, ORDER_BY, CREATE_P_REVIEW, GET_REVIEWS, REVIEWS_FILTER, } from "./cases";


const REQ_URL = 'https://e-commerce-clothing.onrender.com';
// const REQ_URL = 'http://localhost:9000';


export function searchClothes(name) {
  return async function (dispatch) {
    try {
      const clothes = await axios.get(`${REQ_URL}/products?name=${name}`);
      dispatch({
        type: 'SEARCH_CLOTHES',
        payload: clothes.data,
      });
    } catch (error) {
      alert("not found");
    }
  };
}

export const allClothes = () => {
  return async function (dispatch) {
    try {
      const allClothes = await axios.get(`${REQ_URL}/products`)
      dispatch({
        type: 'ALL_CLOTHES',
        payload: allClothes.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const getClothesAdmin = () => {
  return async function (dispatch) {
    try {
      const allClothes = await axios.get(`${REQ_URL}/products`)
      dispatch({
        type: 'GETCLOTHES_ADMIN',
        payload: allClothes.data
      })
    } catch(error) {
      alert('no products')
    }
  }
}

export const clothesDetail = (id) => {
  return async function (dispatch) {
    try {
      const clothesDetail = await axios.get(`${REQ_URL}/products/${id}`)
      dispatch({
        type: 'CLOTHES_DETAIL',
        payload: clothesDetail.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const categories = () => {
  return async function (dispatch) {
    try {
      const category = await axios.get(`${REQ_URL}/category`)
      dispatch({
        type: 'CATEGORIES',
        payload: category.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const createProduct = (product) => {
 // console.log('product que llega a la action', product)
  return async function () {
    try {
      await axios.post(`${REQ_URL}/products`, product)
      .then((response) => {
        console.log(response,'respuesta del post')
      })
    } catch(error) {
      alert("cannot create product")
    }
  }
}

export function updateProduct(id, payload) {
  return async function (dispatch) {
      const json = await axios.put(`${REQ_URL}/products/${id}`, payload)
      return dispatch({ type: "PRODUCT_UPDATE", payload: json.payload })
  }
}


// ------  filtros -------

export function orderBy(payload) {
  return { type: 'ORDER_BY', payload }
}

export function filter(payload) {
  return { type: 'FILTER', payload }
}

export function filterFav(payload) {
  return { type: 'FILTER_FAV', payload }
}

// ---------- users ---------------
export const allUsers = () => {
  return async function (dispatch) {
    try {
      const allUsers = await axios.get(`${REQ_URL}/user`)
      dispatch({
        type: 'ALL_USERS',
        payload: allUsers.data
      })
    } catch (error) {
      console.log('Error action allUsers',error);
    }
  }
}
export const createUs = (payload) => {
  return async function (dispatch) {
    try {
      const newUs = await axios.post(`${REQ_URL}/user`, payload)
      dispatch({
        type: 'CREATE_USER',
        payload: newUs.data
      })
    } catch (error) {
      console.log('error en action/createUser', error);
    }
  }
}

export const editUserActiveProp = (id, active) => {
  return async function(){
    try{
      await axios.put(`${REQ_URL}/user/active/${id}`, {active: active})
    } catch(error){
      alert('no se pudo che')
    }
  }
}

export const updateUserStatus = (id, payload) => {
  return async function (dispatch) {
    try {
      const update = await axios.put(`${REQ_URL}/user/${id}`, payload)
      const allUsers = await axios.get(`${REQ_URL}/user`)
      dispatch({
        type: 'UPDATE_USER_STATUS',
        payload: allUsers.data
      })
    } catch (error) {
      console.log('error en action/updateUserStatus', error);
    }
  }
}

export function editUser(id, payload) { // Para que un User actualice su perfil
  console.log(payload, 'datos') 
  return async function (dispatch) {
    await axios.put(`${REQ_URL}/user/${id}`, payload)
    .then(response => console.log(response, 'respuesta'))
  }
}

export function getUsersDetails (email) {
  return async function(dispatch){
    let json = await axios.get(`${REQ_URL}/user/${email}`)
    return dispatch({
      type: "GET_USER_PROFILE",
      payload: json.data,
    })
  }
}

//-----------------------Reviews-------------------------

export function createProductReview(payload){
  return async function(dispatch){
    try {
      let json = await axios.post(`${REQ_URL}/reviews`, payload)
      dispatch({
          type: 'CREATE_P_REVIEW',
          payload: json.data
      })
    } catch (error) {
      console.log('error en action createReviews', error)
    }
  }
}
export function reviewsFilter(payload) {
  return { type: 'REVIEWS_FILTER', payload: payload }
}
export function getPReviews() {
  return async function (dispatch) {
      const allData = await axios.get(`${REQ_URL}/reviews`)
      return dispatch({ type: 'GET_REVIEWS', payload: allData.data })
  }
}

export function getopenDetail(id) {
  return { type: "OPEN_DETAIL", payload: id }
}

//-----------------------cart-----------------------

export const addCart = (prod) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'ADD_CART',
        payload: prod
      })
    } catch (error) {
      console.log("error en addCart action", error);
    }
  }
}

export const cloudinaryImage = (imagen) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'CLOUDINARY_IMAGE',
        payload: imagen
      })
    } catch (error) {
      console.log("error en addCart action", error);
    }
  }
}

export const cloudinaryProfile = (imagen) => {
  const img = imagen[0]?.secure_url
  return function(dispatch){
    try {
      dispatch({
        type: 'CLOUDINARY_PROFILE',
        payload: img
      })
    } catch(error){
      console.log('error')
    }
  }
}

export const removeCartProduct = (prod) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'REMOVE_CART_PRODUCT',
        payload: prod
      })
    } catch (error) {
      console.log("error en remove cart action", error);
    }
  }
}

export const editProductActiveProp = (id, active) => {
  return async function(){
    try{
      await axios.put(`${REQ_URL}/products/active/${id}`, {active: active})
    } catch(error){
      alert('error')
    }
  }
}

export const editProductFromDataBase = (id, data) => {
  return async function() {
    try {
      await axios.put(`${REQ_URL}/products/${id}`, data)
      .then((response) => {
        console.log(response)
      })
      
    } catch (error) {
      console.log("error edit Product From Data Base", error);
    }
  }
}

export const checkout = (id, cart) => {
  return async function (dispatch) {
    try {
      await axios.post(`${REQ_URL}/buggy`, {userId: id, products: cart})
      const urlPago = await axios.post(`${REQ_URL}/generar`, {userId: id, products: cart}).then((response) => response.data)
      dispatch({type: 'SET_REDIRECTMP', payload: urlPago})
    } catch (error) {
      console.log('error en action/checkOut', error);
    }
  }
}

export const updateStock = (p) => {
  return async function () {
    try {
      await axios.put(`${REQ_URL}/products/${p._id}`, p)
      .then((response) => {
        console.log(response)
      })
    } catch (error) {
      console.log('error en action/checkOut', error);
    }
  }
}
export const purchaseHistory = () => {
  return async function (dispatch) {
    try {
      //falta que pau me pase la ruta get
      const purchaseh = await axios.get(`${REQ_URL}/buggy`)
      dispatch({
        type: 'GET_PURCHASE_HISTORY',
        payload: purchaseh.data
      })
    } catch (error) {
      console.log('error en action purchaseHistory');
    }
  }
}


// ------------------------comments------------------------
export function getComments () {
  return async function(dispatch){
    const allData = await axios.get(`${REQ_URL}/comments`)
    dispatch({
      type: "GET_COMMENTS",
      payload: allData.data
    })
  }
}

export function createComments(payload){
  return async function(dispatch){
    try {
      let json = await axios.post(`${REQ_URL}/comments`, payload)
      dispatch({
          type: 'CREATE_COMMENTS',
          payload: json.data
      })
    } catch (error) {
      console.log('error en action crear comentarios', error)
    }
  }
}

export function addFavorite(userId, productId) {
  return async function(dispatch) {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        userId,
        productId
      }
    })
  }
}

export function removeFavorite(userId, productId) {
  return async function(dispatch) {
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: {
        userId,
        productId
      }
    })
  }
}


// history buggy----------------------------------

export function historyBuggy() {
  return async function(dispatch){
    const allBuggies = await axios.get(`${REQ_URL}/buggy`)
    dispatch({
      type: "GET_HISTORY_BUGGY",
      payload: allBuggies.data
    })
  }

}

export function historyUser(id) {
  return async function(dispatch){
    const allBuggies = await axios.get(`${REQ_URL}/buggy/${id}`)
    dispatch({
      type: "GET_HISTORY_USER",
      payload: allBuggies.data
    })
  }
}

//-----------------------rateUs------------
export const getRate = () => {
  return async function (dispatch) {
    try {
      const rate = await axios.get(`${REQ_URL}/feedback`)
      dispatch({
        type: 'GET_RATE',
        payload: rate.data
      })
    } catch (error) {
      console.log('Error en action getRate');
    }
  }
}
export function addRate(payload){
  return async function(dispatch){
    try {
      let rate = await axios.post(`${REQ_URL}/feedback`, payload)
      dispatch({
          type: 'ADD_RATE',
          payload: rate.data
      })
    } catch (error) {
      console.log('error en action addRate', error)
    }
  }
}

export function gateRateById(id) {
  return async function(dispatch){
    const rate = await axios.get(`${REQ_URL}/feedback/${id}`)
    dispatch({
      type: "GET_RATE_BY_ID",
      payload: rate.data
    })
  }
}

export function deleteRate(id) {
  return async function(dispatch){
    await axios.delete(`${REQ_URL}/feedback/${id}`)
    const rate = await axios.get(`${REQ_URL}/feedback`)
    dispatch({
      type: "DELETE_FEEDBACK",
      payload: rate.data
    })
  }
}