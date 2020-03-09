import { put, takeEvery, call } from "redux-saga/effects";
import AsyncStorage from '@react-native-community/async-storage'
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_INFO_SUCCESS,
  GET_INFO,
  GET_HOME,
  GET_INFO_FAIL,
  GET_HOME_SUCCESS,
  GET_HOME_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from "../actions/type";

import * as API from "../../constants/Api";
import reactotron from "reactotron-react-native"


export function* getUserData() {
  //console.log( "day lD RES")
  try {
    const res = yield call(API.requestUserInfo)
    //console.log(res, "day la res")
    yield put({ type: GET_INFO_SUCCESS, payload: res });
  } catch (error) {
    //console.log(error, "day la res")
    yield put({ type: GET_INFO_FAIL, payload: error })
  }
}

export function* getHomeData(payload) {
  //reactotron.log('dhfj')
  try {
    const res = yield call(API.requestHomeData, payload)
    yield put({
      type: GET_HOME_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    yield put({
      type: GET_HOME_FAIL,
      payload: error
    })
  }
}

export function* getProductData() {
  try {
    const res = yield call(API.requestProductData)
    yield put({
      type: GET_PRODUCT_SUCCESS,
      payload: res
    })
  } catch (error) {
    yield put ({
      type: GET_PRODUCT_FAIL,
      payload: error
    })

  }
}

// export const watchGetUser = takeEvery(GET_USER, getUserInfor);
export const watchGetInfo = takeEvery(GET_INFO, getUserData);
export const watchGetHome = takeEvery(GET_HOME, getHomeData);
export const watchGetProduct = takeEvery(GET_PRODUCT, getProductData);
