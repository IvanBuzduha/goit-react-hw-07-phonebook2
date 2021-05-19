import React, { Component } from "react";
import PropTypes from "prop-types";
import { errorSelector } from "../../../redux/phonebook/contactsSelector";
import { connect } from "react-redux";
import { resetError } from "../../../redux/phonebook/phonebookActions";
class PhoneForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandlSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: "", number: "" });
  };
  onHandlChange = (e) => {
    this.props.error && this.props.resetError();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form onSubmit={this.onHandlSubmit}>
        <label>
          Name:
          <input
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
            type="text"
            name="name"
            onChange={this.onHandlChange}
            value={this.state.name}
            placeholder="John Wick"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number:
          <input
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="+380000000000"
            required
            onChange={this.onHandlChange}
            value={this.state.number}
          />
        </label>
        <button
          type="submit"
          className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none"
        >
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({ error: errorSelector(state) });

export default connect(mapStateToProps, { resetError })(PhoneForm);
// export default PhoneForm;
PhoneForm.propTypes = {
  addContact: PropTypes.func,
};
