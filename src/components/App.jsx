import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import Navigation from './Navigation/Navigation';
import LoginForm from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import Home from './Home/Home';
import Contacts from './Contacts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route
            path="login"
            element={
              <PrivateRoute Component={<LoginForm />} redirectTo="/contacts" />
            }
          />
           <Route
            path="register"
            element={
              <PrivateRoute Component={<RegisterForm />} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <ProtectedRoute Component={<Contacts />} redirectTo="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
