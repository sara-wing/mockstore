import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from 'redux-thunk'
// import thunk


const middleware = applyMiddleware(thunkMiddleware)

export default createStore(rootReducer, undefined, middleware);
