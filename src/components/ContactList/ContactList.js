import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import './ContactList.css';
import PropTypes from 'prop-types';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className="contactList">
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}



export default ContactList;
