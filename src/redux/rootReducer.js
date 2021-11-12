import { combineReducers } from "redux";
import { localStorageSlice } from "../commonRedux/reduxForLocalStorage/slice";

export const rootReducer = combineReducers({
  localStorage: localStorageSlice?.reducer,
});
