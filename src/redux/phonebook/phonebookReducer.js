import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  getAllContacts,
  resetError,
  setError,
  setFilter,
  setLoading,
} from "./phonebookActions";

const contactsReducer = createReducer([], {
  [getAllContacts]: (_, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter((contact) => contact.id !== payload),
  ],
});
const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});
const loaderReducer = createReducer(false, { [setLoading]: (state) => !state });
const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

export { contactsReducer, filterReducer, errorReducer, loaderReducer };
