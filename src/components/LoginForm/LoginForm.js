import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Input, Button, Flex, FormControl, FormLabel, Box } from '@chakra-ui/react';

function LoginForm() {
    const dispatch = useDispatch();
    useEffect(() => {
        
    }, [dispatch]);

    const inputBgColor = '#f9c7cf';
    const buttonBgColor = '#f9c7cf';
    const buttonHoverColor = '#ff1389';

    const buttonStyles = {
        bg: buttonBgColor,
        _hover: { bg: buttonHoverColor, color: 'white' },
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Box
            maxW="400px"
            m="20px auto"
            p="20px"
            border="1px solid #ddd"
            borderRadius="5px"
            bg="pink.100"
        >
            <form className="loginForm" onSubmit={handleSubmit}>
                <FormControl mb="15px">
                    <FormLabel>Email:</FormLabel>
                    <Input type="text" name="email" bg={inputBgColor} />
                </FormControl>
                <FormControl mb="15px">
                    <FormLabel>Password:</FormLabel>
                    <Input type="password" name="password" bg={inputBgColor} />
                </FormControl>
                <Flex justifyContent="center">
                    <Button type="submit" {...buttonStyles} style={{  padding: '20px' }}>
                        Login
                    </Button>
                </Flex>
            </form>
        </Box>
    );
}

export default LoginForm;
