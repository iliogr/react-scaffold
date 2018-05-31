import * as actionType from '../Actions/ActionType';

const loginReducer = (state = {
    isFetching: false
}, action) => {

    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return { ...state,
                isFetching: true,
                isAuthenticated: false
            }
        case actionType.LOGIN_SUCCESS:
            return { ...state,
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            }
        case actionType.LOGIN_FAILURE:
            return { ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            }
        case actionType.LOGOUT_SUCCESS:
            return { ...state,
                isFetching: false,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}
export default loginReducer;
