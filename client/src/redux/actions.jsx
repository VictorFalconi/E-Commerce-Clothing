import axios from "axios";

import { ALL_CLOTHES, CLOTHES_DETAIL, SEARCH_CLOTHES } from "./cases";

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
      const allClothes = await axios()
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
      const clothesDetail = await axios()
      dispatch({
        type: CLOTHES_DETAIL,
        payload: clothesDetail.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}



