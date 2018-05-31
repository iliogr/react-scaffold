import * as actionType from './ActionType';

const requestLogin = (creds) => {
    return {
        type: actionType.LOGIN_REQUEST
    }
}

const receiveLogin = () => {
    return {
        type: actionType.LOGIN_SUCCESS
    }
}

const loginError = (message) => {
    return {
        type: actionType.LOGIN_FAILURE,
        message: message
    }
}

const logoutSuccess = (message) => {
    return {
        type: actionType.LOGOUT_SUCCESS,
        message: 'Successfully logged out'
    }
}

export const loginUser = (creds) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(requestLogin())
            resolve(dispatch(receiveLogin()))
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
    }
}
