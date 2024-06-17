import React from 'react';
import { NavLink } from 'react-router-dom';
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

const PayB0xx = () => {
  return (
    <Box
      w="100%"
      px={2}
      py={24}
      maxHeight="199vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
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
          />

          <Text textAlign="center">Connect your seed wallet to join.</Text>
          <Button
            as={NavLink}
            bg="#000"
            color="#fff"
            _hover={{ bg: '#828282' }}
            _active={{ bg: '#aaa', color: '#000' }}
            my={6}
            to="/b0xx"
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

export default PayB0xx;
