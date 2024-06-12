import React from 'react';
import {
  Box,
  Grid,
  Link,
  Button,
  Text,
  Heading,
  theme,
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
      w="100%"
      px={2}
      py={24}
      bgGradient="linear(to-l, #000, #999)"
      alignItems="center"
    >
      <Grid p={1} w="100%" textAlign="center">
        <Heading lineHeight="tall" color="#000">
          Launch.
        </Heading>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Text
          fontFamily="'Josefin Slab', serif"
          m={4}
          textAlign="center"
          textColor="#000"
        >
          Let's get you paid.
        </Text>
      </Grid>
      <Grid spacing={4} px={4} templateColumns="repeat(3, 1fr)" gap={8}>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Assembly
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Documents</ListItem>
              <ListItem>Online</ListItem>
              <ListItem>Token</ListItem>
              <ListItem>DAO</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/launch/assembly">
              Aggregate
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Launch
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Send it.</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/launch/launch">
              Send
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Maintain
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Bugs</ListItem>
              <ListItem>Customer service</ListItem>
              <ListItem>Upgrade</ListItem>
              <ListItem>Overhaul</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/launch/maintain">
              Edit
            </Button>
          </CardFooter>
        </Card>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Heading textAlign="center" color="#000" size="lg" marginBottom={8}>
          Send it.
        </Heading>
        <Heading textAlign="center" color="#000" size="md" marginBottom={8}>
          That's it. you did the work.
        </Heading>
        <Text m="auto" textAlign="center" textColor="#E6E6E6" maxW="80%">
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
      </Grid>
    </Box>
  );
};

export default Launch;
