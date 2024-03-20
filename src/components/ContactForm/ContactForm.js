import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Input, Button, Flex, FormControl, Box } from '@chakra-ui/react';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const inputStyles = {
    margin: '5px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    
  };

  const buttonBgColor = '#FF69B4';
  const buttonHoverColor = '#e2347a';
  const buttonStyles = {
    bg: buttonBgColor,
    color: 'white',
    cursor: 'pointer',
    _hover: { bg: buttonHoverColor },
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="300px"
      marginBottom="20px"
      padding="10px"
      as="form"
      onSubmit={handleSubmit}
      className="contactForm"
    >
      <FormControl>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
          {...inputStyles}
        />
      </FormControl>
      <FormControl>
        <Input
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="Number"
          required
          {...inputStyles}
        />
      </FormControl>
      <Flex justifyContent="center">
        <Button type="submit" {...buttonStyles} padding="10px" borderRadius="5px">
          Add Contact
        </Button>
      </Flex>
    </Box>
  );
}

export default ContactForm;
