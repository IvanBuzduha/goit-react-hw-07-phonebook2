// import React from "react";
// import PropTypes from "prop-types";
// const PhoneList = ({ contacts, deleteContact }) => {
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <li className="mt-4" key={contact.id}>
//           <span className="  mb-1 mt-1">
//             {contact.name + ": " + contact.number}
//           </span>

//           <button
//             id={contact.id}
//             type="button"
//             onClick={deleteContact}
//             className="absolute right-8 px-6 mb-1 mt-1  text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-red-600 hover:shadow-lg focus:outline-none"
//           >
//             DELETE
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default PhoneList;

// PhoneList.propTypes = {
//   deleteContact: PropTypes.func,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

import React from "react";
import PropTypes from "prop-types";
import PhoneListItem from "./../PhoneListItem/PhoneListItem";

const PhoneList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <PhoneListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

PhoneList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
export default PhoneList;
