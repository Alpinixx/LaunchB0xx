import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Button, Text, Heading } from '@chakra-ui/react';

const Launch = () => {
  return (
    <Box w="100%" px={16} pt={48} pb={24} bgGradient="linear(to-l, #000, #999)">
      <Heading size="2xl" lineHeight="tall" color="#000" textAlign="center">
        Launch.
      </Heading>
      <Text
        fontFamily="'Josefin Slab', serif"
        m={4}
        textAlign="center"
        textColor="#000"
        fontSize="24px"
      >
        Let's get you paid.
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
          <Heading size="md">Assembly</Heading>
          <Box my={12}>
            <Text>Documents</Text>
            <Text>Online</Text>
            <Text>Token</Text>
            <Text>DAO</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/launch/assembly"
            bg="#000"
            color="#fff"
          >
            Aggregate
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
          <Heading size="md">Launch</Heading>
          <Box my={12}>
            <Text my={9}>Send it.</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/launch/assembly"
            bg="#000"
            color="#fff"
          >
            Send
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
          <Heading size="md">Maintain</Heading>
          <Box my={12}>
            <Text>Bugs</Text>
            <Text>Customer service</Text>
            <Text>Upgrade</Text>
            <Text>Overhaul</Text>
          </Box>
          <Button
            as={NavLink}
            w="100%"
            to="/launch/assembly"
            bg="#000"
            color="#fff"
          >
            Edit
          </Button>
        </GridItem>
      </Grid>
      <Box pb={28} textAlign="center">
        <Heading size="xl">Send it.</Heading>
        <Heading fontSize="24px" my={8}>
          That's it. you did the work.
        </Heading>
        <Text textColor="#E6E6E6" mx="auto" maxW="1010px" fontSize="20px">
          Line 'em up, and head em' out. Time to see what you've built through
          the eyes of your comunity. If you need to some back to apply some
          tweaks, the control panel is here. If you need to come back and burn
          it all down so you can rebuild, you know where it is.
        </Text>
      </Box>
    </Box>
  );
};

export default Launch;
