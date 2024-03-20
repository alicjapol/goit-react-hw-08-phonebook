import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Home from './Home/Home';
import Contacts from './Contacts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import useAuth from 'hooks/useAuth';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import UserMenu from './UserMenu/UserMenu';

const customTheme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
});

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter>


  <ChakraProvider theme={customTheme}>
   
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
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo="/login">
                  <UserMenu />
                </ProtectedRoute>
              }
            />
          </Routes>
          </ChakraProvider>

        </BrowserRouter>
  
  );
};
