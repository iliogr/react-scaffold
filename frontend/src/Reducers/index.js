import {
    combineReducers
} from 'redux';
import { connectRouter } from 'connected-react-router'
import loginReducer from './loginReducer';

export default (history) => combineReducers({
   router: connectRouter(history),
   loginReducer
})
