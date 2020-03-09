import {
  GET_USER,
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  GET_HOME,
  GET_HOME_SUCCESS,
  GET_HOME_FAIL,
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
});

export const usernameChange = (text) => ({
  type: USERNAME_CHANGE,
  payload: text
});

export const passwordChange = (text) => ({
  type: PASSWORD_CHANGE,
  payload: text
});

export const getHome = (payload) => {
  //console.log("ssj")
  return {
    type: GET_HOME,
    payload: payload
  }
}

export const getHomeSuccess = (payload) => ({
  type: GET_HOME_SUCCESS,
  payload: payload
});

export const getHomeFail = (payload) => ({
  type: GET_HOME_FAIL,
  payload: payload
});

export const getInfo = (payload) => {
  //console.log("action")
  return {
    type: GET_INFO,
    payload: payload
  }
}

export const getInfoSuccess = (payload) => ({
  type: GET_INFO_SUCCESS,
  payload: payload
});

export const getInfoFail = (payload) => ({
  type: GET_INFO_FAIL,
  payload: payload
});


export const getProduct = (payload) => ({
  type: GET_PRODUCT,
  payload: payload
});


export const getProductSuccess = (payload) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: payload
});


export const getProductFail = (payload) => ({
  type: GET_PRODUCT_FAIL,
  payload: payload
});
