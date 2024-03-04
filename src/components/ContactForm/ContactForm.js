import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
