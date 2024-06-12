import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link,
  Button,
  Text,
  Input,
  Image,
  Heading,
  Highlight,
  HStack,
  Divider,
  theme,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

import ImageWorkBench from '../../assets/workbench.png';

const ConnectWallet = () => {
  return (
    <Box
      w="100%"
      px={2}
      py={24}
      bgGradient="linear(to-l, #000, #999)"
      alignItems="center"
    >
      <Grid p={1} w="100%" textAlign="center">
        <Heading lineHeight="tall" color="#000">
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
      </Grid>
      <Grid alignItems="center" p={4}>
        <Text
          fontFamily="'Josefin Slab', serif"
          m={4}
          textAlign="center"
          textColor="#E6E6E6"
        >
          Create an account:
        </Text>
        <br />
        <HStack spacing={4} align="center">
          <Divider borderColor="gray.100" />
          <Text> Username: </Text>
          <Divider borderColor="gray.100" />
        </HStack>
        <Text textAlign="center">Connect your seed wallet to join.</Text>

        <Input
          width={400}
          m="auto"
          variant="filled"
          placeholder="Somebody.Launch"
        />

        <Button
          bg="#000"
          color="#fff"
          w={400}
          m="auto"
          marginBottom={10}
          marginTop={10}
        >
          Connect Wallet.
        </Button>
        <Text color="#ddd">
          By connecting wallet, you agree to our
          <br />
          Terms of Service <Text color="#ddd">and</Text> Privacy Policy
        </Text>
      </Grid>
    </Box>
  );
};

export default ConnectWallet;
