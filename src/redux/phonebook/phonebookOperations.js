import axios from "axios";
import { contactsSelector } from "./contactsSelector";
import {
  addContact,
  deleteContact,
  getAllContacts,
  setError,
  setLoading,
} from "./phonebookActions";

const getAllContactsOperating = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get(
      `https://phonebook-20-default-rtdb.firebaseio.com/contacts.json`
    );
    if (data) {
      const contacts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      dispatch(getAllContacts(contacts));
    }
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoading());
  }
};
const addContactOperating = (contact) => async (dispatch, getState) => {
  const contacts = contactsSelector(getState());
  if (
    contacts.some((cont) =>
      cont.name.toLowerCase().includes(contact.name.toLowerCase())
    )
  ) {
    dispatch(setError(`This name ${contact.name} is already exist`));
    return;
    // } else if (contacts.some((cont) => cont.number).includes(contact.number)) {
    //   dispatch(setError(`This number ${contact.number} is already exist`));
    //   return;
  }
  dispatch(setLoading());
  try {
    const { data } = await axios.post(
      `https://phonebook-20-default-rtdb.firebaseio.com/contacts.json`,
      contact
    );
    dispatch(addContact({ ...contact, id: data.name }));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoading());
  }
};
const deleteContactOperating = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await axios.delete(
      `https://phonebook-20-default-rtdb.firebaseio.com/contacts/${id}.json`
    );
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoading());
  }
};

export { getAllContactsOperating, addContactOperating, deleteContactOperating };
