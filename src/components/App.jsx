import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import SignUpForm from './RegisterForm/RegisterForm';
import Navigation from './Navigation/Navigation';
import  LoginForm from './LoginForm/LoginForm'
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
<BrowserRouter>
<Navigation></Navigation>
<Routes>
        {/* <Route path="/" element={<ContactForm />} /> */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
      </BrowserRouter>
    </div>
  );
};

export default App;
