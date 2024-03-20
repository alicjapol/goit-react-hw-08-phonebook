import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
  useColorMode,
  IconButton,
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const linkStyles = {
  textDecoration: 'none',
  fontWeight:'600',
  fontSize: '18px',
  letterSpacing: '0.8px',
  _hover: {
    textDecoration: 'none',
    backgroundColor: '#ff1389',
    color: 'white',
    borderRadius: '5px',
    padding: '8px',
  },
};

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('pink.100', 'pink.900');
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg={bgColor} p={6} color={color}>
      <Flex align="center" justify="space-between" wrap="wrap">
        <HStack spacing={8}>
          <Link as={NavLink} to="/" sx={linkStyles}>
            Home
          </Link>
          {isLoggedIn && (
            <Link as={NavLink} to="/contacts" sx={linkStyles}>
              Contacts
            </Link>
          )}
          {isLoggedIn ? (
            <Link as={NavLink} to="/profile" sx={linkStyles}>
              User Profile
            </Link>
          ) : (
            <>
              <Link as={NavLink} to="/register" sx={linkStyles}>
                Register
              </Link>
              <Link as={NavLink} to="/login" sx={linkStyles}>
                Login
              </Link>
            </>
          )}
        </HStack>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          bg="transparent"
          _hover={{ bg: 'rgba(0,0,0,0.1)' }}         />
      </Flex>
    </Box>
  );
}
