import axios from "axios";

import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, SEARCH_CLOTHES } from "./cases";

export function searchClothes(name) {
  return async function (dispatch) {
    try {
      var clothes = await axios();
      return dispatch({
        type: SEARCH_CLOTHES,
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
      const allClothes = await axios('http://localhost:9000/products')
      dispatch({
        type: ALL_CLOTHES,
        payload: allClothes.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const clothesDetail = (id) => {
  return async function (dispatch) {
    try {
      const clothesDetail = await axios(`http://localhost:9000/products/${id}`)
      dispatch({
        type: CLOTHES_DETAIL,
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
      const category = await axios('http://localhost:9000/category')
      dispatch({
        type: CATEGORIES,
        payload: category.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}



