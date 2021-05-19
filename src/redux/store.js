import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  contactsReducer,
  errorReducer,
  filterReducer,
  loaderReducer,
} from "./phonebook/phonebookReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loaderReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
