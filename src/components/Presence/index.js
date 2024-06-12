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

const Presence = () => {
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
          Presence.
        </Heading>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Text
          fontFamily="'Josefin Slab', serif"
          m={4}
          textAlign="center"
          textColor="#000"
        >
          Demographic awareness comes when you make yourself known.
        </Text>
      </Grid>
      <Grid spacing={4} px={4} templateColumns="repeat(3, 1fr)" gap={8}>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Website
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Domain Names</ListItem>
              <ListItem>Templates</ListItem>
              <ListItem>Editor</ListItem>
              <ListItem>Test</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/presence/website">
              Create
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Socials
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Audience</ListItem>
              <ListItem>Support</ListItem>
              <ListItem>Optics</ListItem>
              <ListItem>Chat</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/presence/socials">
              Colloboration
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Marketing
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Demographic</ListItem>
              <ListItem>Templates</ListItem>
              <ListItem>Metrics</ListItem>
              <ListItem>Motivation</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/presence/marketing">
              Chat
            </Button>
          </CardFooter>
        </Card>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Heading textAlign="center" color="#000" size="lg" marginBottom={8}>
          Now for Presence.
        </Heading>
        <Heading textAlign="center" color="#000" size="md" marginBottom={8}>
          Dev work was the engine, but presence is the paint.
        </Heading>
        <Text m="auto" textAlign="center" textColor="#E6E6E6" maxW="80%">
          When sending your project, do it the right way. Make a name for
          yourself.
          <br />
          Get yourself out there. Let people know who you are, and what you
          intend to accomplish with this project.
          <br />
          If you give the masses a good product, backed by a good solution, they
          will have reason to
          <br />
          believe in you and will join you on your Quest
        </Text>
      </Grid>
    </Box>
  );
};

export default Presence;
