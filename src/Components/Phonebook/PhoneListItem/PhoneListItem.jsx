import React from "react";
import PropTypes from "prop-types";
const PhoneListItem = ({ contact, deleteContact }) => {
  return (
    <li className="mt-4">
      <span className="  mb-1 mt-1">
        {contact.name + ": " + contact.number}
      </span>
      <button
        id={contact.id}
        type="button"
        onClick={deleteContact}
        className="absolute right-8 px-6 mb-1 mt-1  text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-red-600 hover:shadow-lg focus:outline-none"
      >
        DELETE
      </button>
    </li>
  );
};
export default PhoneListItem;
PhoneListItem.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
