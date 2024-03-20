import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { logout } from '../../redux/auth/operations';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={handleLogout}
      fontWeight="bold"
      padding="25px"
      textDecoration="none"
      color="#000"
      border="2px solid #fff"
      borderRadius="10px"
      textAlign="center"
      position="relative"
      transition="all 0.35s"
      _hover={{ color: '#fff' }}
      _after={{
        position: 'absolute',
        content: "''",
        top: '0',
        left: '0',
        width: '0',
        height: '100%',
        background: '#ff00bb',
        transition: 'all 0.35s',
      }}
      _hover_after={{ width: '100%' }}
    >
      Logout
    </Button>
  );
}
