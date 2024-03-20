import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { Text, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const listItemStyles = {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '600px'
  };

  const buttonStyles = {
    cursor: 'pointer',
    bg: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    _hover: { bg: '#ffffff', color: 'black' },
  };

  return (
    <UnorderedList listStyleType="none" padding="0">
      {contacts.map(contact => (
        <ListItem key={contact.id} {...listItemStyles}>
          <Text>{contact.name}: {contact.number}</Text>
          <Button onClick={() => dispatch(deleteContact(contact.id))} {...buttonStyles}>
            Delete
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default ContactList;
