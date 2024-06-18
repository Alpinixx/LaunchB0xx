import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Button, Text, Heading } from '@chakra-ui/react';

const Development = () => {
  return (
    <Box
      mt="5rem"
      w="100%"
      px={16}
      py={24}
      bgGradient="linear(to-l, #000, #999)"
    >
      <Heading size="2xl" lineHeight="tall" color="#000" textAlign="center">
        Development.
      </Heading>
      <Text
        fontFamily="'Josefin Slab', serif"
        m={4}
        textAlign="center"
        textColor="#000"
        fontSize="24px"
      >
        Get in the mud and dig out that gold.
      </Text>
      <Grid px={4} templateColumns="repeat(6, 1fr)" gap={8} my={28}>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Document</Heading>
          <Box my={12}>
            <Text>Decentralization</Text>
            <Text>Transparency</Text>
            <Text>Inform</Text>
            <Text>Store</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/development/documentation"
            bg="#000"
            color="#fff"
          >
            Scribe
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Contract</Heading>
          <Box my={12}>
            <Text> </Text>
            <Text>Non-Fungible Tokens</Text>
            <Text>Fungible Tokens</Text>
            <Text>Trust</Text>
            <Text>DeFi</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/development/contracts"
            bg="#000"
            color="#fff"
          >
            Build
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Graphics</Heading>
          <Box my={12}>
            <Text>Design</Text>
            <Text>Align</Text>
            <Text>Assemble</Text>
            <Text>Print</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/development/graphics"
            bg="#000"
            color="#fff"
          >
            Paint
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 3 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Graphics</Heading>
          <Box my={12}>
            <Text>Narrative</Text>
            <Text>Design</Text>
            <Text>Characters</Text>
            <Text>Trade</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/development/gamification"
            bg="#000"
            color="#fff"
          >
            Coming Soon!
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 3 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Real Estate Fractionalization</Heading>
          <Box my={12}>
            <Text>Contract</Text>
            <Text>Transfer</Text>
            <Text>Partition</Text>
            <Text>Zoning</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/development/realestate"
            bg="#000"
            color="#fff"
          >
            Coming Soon!
          </Button>
        </GridItem>
      </Grid>
      <Box pb={28} textAlign="center">
        <Heading size="xl">Dev next.</Heading>
        <Heading fontSize="24px" my={8}>
          Here’s where the magic begins.
        </Heading>
        <Text textColor="#E6E6E6" px={24} fontSize="20px">
          We have made some valuable partnerships for your benefit. If you are
          already a blockchain guru, you know what to do. if you are just
          starting out, or have a few clues, no worries, we got you. We have
          portals to walk through.
        </Text>
      </Box>
    </Box>
  );
};

export default Development;
