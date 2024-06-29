import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Button, Text, Heading } from '@chakra-ui/react';

const Structure = () => {
  return (
    <Box w="100%" px={16} pt={48} pb={24} bgGradient="linear(to-l, #000, #999)">
      <Heading size="2xl" lineHeight="tall" color="#000" textAlign="center">
        Structure.
      </Heading>
      <Text
        fontFamily="'Josefin Slab', serif"
        m={4}
        textAlign="center"
        textColor="#000"
        fontSize="24px"
      >
        Projects last longer when they have solid structure.
      </Text>
      <Grid px={4} templateColumns="repeat(3, 1fr)" gap={8} my={28}>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">DAO</Heading>
          <Box my={12}>
            <Text>Decentralization</Text>
            <Text>Transparency</Text>
            <Text>Incentive</Text>
            <Text>Funding</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/structure/dao"
            bg="#000"
            color="#fff"
          >
            Create
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Team Solidarity</Heading>
          <Box my={12}>
            <Text>Collaboration</Text>
            <Text>Progress</Text>
            <Text>Decide</Text>
            <Text>Chat</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/structure/team"
            bg="#000"
            color="#fff"
          >
            Collaborate
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={12}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="md">Platform Support</Heading>
          <Box my={12}>
            <Text>Resource</Text>
            <Text>Platform</Text>
            <Text>Knowledge</Text>
            <Text>Support</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/structure/support"
            bg="#000"
            color="#fff"
          >
            Chat
          </Button>
        </GridItem>
      </Grid>
      <Box pb={28} textAlign="center">
        <Heading size="xl">Structure First.</Heading>
        <Heading fontSize="24px" my={8}>
          Why ‘Structure first’?
        </Heading>
        <Text textColor="#E6E6E6" mx="auto" maxW="1010px" fontSize="20px">
          Why lay a foundation before constructing a skyscraper? Because of very
          good reasons. Set your foundation first; and you will go far. We have
          added tools here for your ease of framework. Go on in. check them out
          and begin your journey the solid way.
        </Text>
      </Box>
    </Box>
  );
};

export default Structure;
