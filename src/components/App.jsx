import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import Navigation from './Navigation/Navigation';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Home from './Home/Home';
import Contacts from './Contacts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import useAuth from 'hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
    console.log(dispatch);
  }, []); 

  if (isRefreshing) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PrivateRoute redirectTo="/contacts">
                <LoginForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PrivateRoute redirectTo="/contacts">
                <RegisterForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute redirectTo="/login">
                <Contacts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
