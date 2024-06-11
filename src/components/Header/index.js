import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link as ChakraLink,
  Button,
  theme,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="#454545" w="100%" p={4} color="white">
      <Grid templateColumns="repeat(8, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          <ChakraLink href="/">Launchb0xx</ChakraLink>
        </GridItem>
        <GridItem colStart={4} colEnd={5} w="100%" h="10">
          <ChakraLink href="/structure">Structure</ChakraLink>
        </GridItem>
        <GridItem w="100%" h="10">
          <ChakraLink href="/development">Development</ChakraLink>
        </GridItem>
        <GridItem w="100%" h="10">
          <ChakraLink href="/presence">Presence</ChakraLink>
        </GridItem>
        <GridItem w="100%" h="10">
          <ChakraLink href="/launch">Launch</ChakraLink>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button bg="#000" color="#fff" borderRadius="8px">
            b0xx
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
