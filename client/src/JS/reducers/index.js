import {combineReducers} from "redux"
import { campReducer } from "./campReducer"
import {productReducer} from "./productReducer"
import {userReducer} from "./userReducer"
export const rootReducer=combineReducers({campReducer,productReducer,userReducer})