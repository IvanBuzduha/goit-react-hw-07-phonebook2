import React, { Component } from "react";
import PhoneFilter from "./PhoneFilter/PhoneFilter";
import PhoneForm from "./PhoneForm/PhoneForm";
import PhoneList from "./PhoneList/PhoneList";
import { connect } from "react-redux";
import { setFilter } from "../../redux/phonebook/phonebookActions";
import {
  addContactOperating,
  deleteContactOperating,
  getAllContactsOperating,
} from "../../redux/phonebook/phonebookOperations";
import {
  contactsSelector,
  errorSelector,
  getFilteredContacts,
  loaderSelector,
} from "../../redux/phonebook/contactsSelector";
import Loader from "react-loader-spinner";

class Phonebook extends Component {
  async componentDidMount() {
    this.props.getAllContactsOperating();
  }

  addContact = async (contact) => {
    this.props.addContactOperating(contact);
  };

  deleteContact = async (e) => {
    const { id } = e.target;
    this.props.deleteContactOperating(id);
  };

  setFilter = (e) => {
    const { value } = e.target;
    this.props.setFilter(value);
  };

  render() {
    return (
      <div className="relative mx-auto max-w-md px-8 py-12 bg-white border-0 shadow-lg sm:rounded-3xl ">
        {this.props.isLoading && (
          <Loader
            type="Oval"
            color="rgb(16, 185, 129)"
            height={50}
            width={50}
            className="  flex flex-wrap justify-center items-center/"
          />
        )}
        <PhoneForm addContact={this.addContact} />
        <PhoneFilter filter={this.props.filter} setFilter={this.setFilter} />
        {this.props.error && (
          <h3 className="text-red-500">{this.props.error}</h3>
        )}
        {this.props.contacts.length === 0 && (
          <p>Contacts list is empty. Please, create new cotnact!</p>
        )}
        <PhoneList
          contacts={this.props.filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: contactsSelector(state),
  filterContacts: getFilteredContacts(state),
  error: errorSelector(state),
  isLoading: loaderSelector(state),
});
const mapDispatchToProps = {
  getAllContactsOperating,
  addContactOperating,
  deleteContactOperating,
  setFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
