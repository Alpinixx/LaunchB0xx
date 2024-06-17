import React from 'react';
import {
  Box,
  Grid,
  Link,
  Button,
  Text,
  Heading,
  theme,
  GridItem,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

const Launch = () => {
  return (
    <Box
      mt="5rem"
      w="100%"
      px={16}
      py={24}
      bgGradient="linear(to-l, #000, #999)"
    >
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
      <Grid px={4} templateColumns="repeat(3, 1fr)" gap={8}>
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Heading size="md" textAlign="center">
            Assembly
          </Heading>
          <UnorderedList>
            <ListItem>Documents</ListItem>
            <ListItem>Online</ListItem>
            <ListItem>Token</ListItem>
            <ListItem>DAO</ListItem>
          </UnorderedList>
          <Button as={Link} href="/launch/assembly">
            Aggregate
          </Button>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: '1' }}>
          <Heading size="md" textAlign="center">
            Launch
          </Heading>
          <UnorderedList>
            <ListItem>Send it.</ListItem>
          </UnorderedList>
          <Button as={Link} href="/launch/launchsub">
            Send
          </Button>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: '1' }}>
          <Heading size="md" textAlign="center">
            Maintain
          </Heading>
          <UnorderedList>
            <ListItem>Bugs</ListItem>
            <ListItem>Customer service</ListItem>
            <ListItem>Upgrade</ListItem>
            <ListItem>Overhaul</ListItem>
          </UnorderedList>
          <Button as={Link} href="/launch/maintain">
            Edit
          </Button>
        </GridItem>
      </Grid>
      <Box py={28}>
        <Heading textAlign="center" size="xl">
          Send it.
        </Heading>
        <Heading textAlign="center" fontSize="24px" my={8}>
          That's it. you did the work.
        </Heading>
        <Text textAlign="center" textColor="#E6E6E6" px={24} fontSize="20px">
          Line 'em up, and head em' out.
          <br />
          Time to see what you've built through the eyes of your comunity.
          <br />
          If you need to some back to apply some tweaks, the control panel is
          here.
          <br />
          If you need to come back and burn it all down so you can rebuild, you
          know where it is.
        </Text>
      </Box>
    </Box>
  );
};

export default Launch;
