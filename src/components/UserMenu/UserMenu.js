import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';
import LogoutButton from '../LogoutButton/LogoutButton';
import useAuth from '../../hooks/useAuth';

export default function UserMenu() {
  const { user } = useAuth();

  return (
    <Box
      padding="20px"
      borderRadius="8px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="8px"
      backgroundColor="#f4d3f0"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      maxWidth="300px"
      margin="auto"
      marginTop="20px"

      bg="pink.100"

    >
      <Avatar
        className="avatar"
        src="https://bootdey.com/img/Content/avatar/avatar3.png"
        alt="avatar"
        size="xl"
      />
      <Text
        className="userEmail"
        fontSize="16px"
        fontWeight="bold"
        bgColor="pink.100"
        borderRadius="4px"
        padding="20px"
        width="100%"
        textAlign="center"
      >
        Email: {user?.email}
      </Text>
      <LogoutButton />
    </Box>
  );
}
