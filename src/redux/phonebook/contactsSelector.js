import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = (state) => state.contacts;
export const filterSelector = (state) => state.filter;
export const errorSelector = (state) => state.error;
export const loaderSelector = (state) => state.isLoading;

export const getFilteredContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
);
