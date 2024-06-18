import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Button, Text, Heading } from '@chakra-ui/react';

const Presence = () => {
  return (
    <Box
      mt="5rem"
      w="100%"
      px={16}
      py={24}
      bgGradient="linear(to-l, #000, #999)"
    >
      <Heading size="2xl" lineHeight="tall" color="#000" textAlign="center">
        Presence.
      </Heading>
      <Text
        fontFamily="'Josefin Slab', serif"
        m={4}
        textAlign="center"
        textColor="#000"
        fontSize="24px"
      >
        Demographic awareness comes when you make yourself known.
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
          <Heading size="md">Website</Heading>
          <Box my={12}>
            <Text>Domain Names</Text>
            <Text>Templates</Text>
            <Text>Editor</Text>
            <Text>Test</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/presence/website"
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
          <Heading size="md">Socials</Heading>
          <Box my={12}>
            <Text>Audience</Text>
            <Text>Support</Text>
            <Text>Optics</Text>
            <Text>Chat</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/presence/socials"
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
          <Heading size="md">Marketing</Heading>
          <Box my={12}>
            <Text>Demographics</Text>
            <Text>Templates</Text>
            <Text>Metrics</Text>
            <Text>Motivation</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/presence/marketing"
            bg="#000"
            color="#fff"
          >
            Chat
          </Button>
        </GridItem>
      </Grid>
      <Box pb={28} textAlign="center">
        <Heading size="xl">Now for Presence.</Heading>
        <Heading fontSize="24px" my={8}>
          Dev work was the engine, but presence is the paint.
        </Heading>
        <Text textColor="#E6E6E6" px={24} fontSize="20px">
          When sending your project, do it the right way. Make a name for
          yourself. Get yourself out there. Let people know who you are, and
          what you intend to accomplish with this project. If you give the
          masses a good product, backed by a good solution, they will have
          reason to believe in you and will join you on your Quest.
        </Text>
      </Box>
    </Box>
  );
};

export default Presence;
