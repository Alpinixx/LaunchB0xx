import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api';
import { useAuth } from '../../AuthContext';
import {
  Box,
  Grid,
  Button,
  Text,
  Input,
  Heading,
  Highlight,
  HStack,
  Divider,
} from '@chakra-ui/react';

const PayLaunch = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'launchboxxonaptos') {
      setIsAuthenticated(true);
      navigate('/launchlanding');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Box
      w="100%"
      px={2}
      py={24}
      bgGradient="linear(to-l, #000, #999)"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Heading lineHeight="tall" color="#000" fontSize="16px">
        <Highlight
          query="b0xx"
          styles={{
            px: '0',
            py: '4',
            rounded: '3px',
            bg: '#21c5b6',
            color: '#fff',
          }}
        >
          Launchb0xx
        </Highlight>
      </Heading>
      <Box maxW={500}>
        <Grid alignItems="center" p={4}>
          <Text fontSize="24px" my={6} textAlign="center" fontWeight="bolder">
            Create an account:
          </Text>
          <HStack spacing={4} align="center">
            <Divider borderColor="#888" />
            <Text color="#888"> Username: </Text>
            <Divider borderColor="#888" />
          </HStack>

          <Input
            my={6}
            variant="filled"
            textAlign="center"
            placeholder="Somebody.Launch"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {error && (
            <Text color="#a00" textAlign="center">
              {error}
            </Text>
          )}

          <Text textAlign="center">Connect your seed wallet to join.</Text>
          <Button
            bg="#000"
            color="#fff"
            _hover={{ bg: '#828282' }}
            _active={{ bg: '#aaa', color: '#000' }}
            my={6}
            onClick={handleLogin}
          >
            Connect Wallet
          </Button>
          <Text color="#828282">
            By connecting wallet, you agree to our
            <br />
            <Text as="span" color="#000">
              Terms of Service
            </Text>{' '}
            and{' '}
            <Text as="span" color="#000">
              Privacy Policy
            </Text>
          </Text>
        </Grid>
      </Box>
    </Box>
  );
};

export default PayLaunch;
