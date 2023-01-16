import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authreducer } from "./auth/reducer";

const rootreducer=combineReducers({
   auth : authreducer
})
export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))