import { createAction } from "@reduxjs/toolkit";

export const getAllContacts = createAction("contacts/getAllContacts");
export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const setFilter = createAction("filter/setFilter");
export const resetError = createAction("contacts/resetError");
export const setError = createAction("contacts/setError");
export const setLoading = createAction("contacts/setLoading");
