// import FireBaseTools from '../utils/firebase'

import * as actionTypes from './types'

export function userLoginRequest(user) {
    return {
        type: actionTypes.USER_LOGIN_REQUEST,
        payload: user,
    }
}

export function userLoginSuccess(user) {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: user,
    }
}

export function userLoginFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_FAILURE,
        error,
    }
}

// / FETCH USER
export function fetchUserRequest() {
    return {
        type: actionTypes.USER_FETCH_REQUEST,
    }
}
export function fetchUserSuccess(user) {
    return {
        type: actionTypes.USER_FETCH_SUCCESS,
        payload: user,
    }
}
export function fetchUserFailure() {
    return {
        type: actionTypes.USER_FETCH_FAILURE,
    }
}

// LOGOUT user
export function userLogoutRequest() {
    return {
        type: actionTypes.USER_LOGOUT_REQUEST,
    }
}
export function userLogoutSuccess() {
    return {
        type: actionTypes.USER_LOGOUT_SUCCESS,
    }
}
export function userLogoutFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_FAILURE,
        error,
    }
}
