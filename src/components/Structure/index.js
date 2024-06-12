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

const Structure = () => {
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
          Structure.
        </Heading>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Text
          fontFamily="'Josefin Slab', serif"
          m={4}
          textAlign="center"
          textColor="#000"
        >
          Project last longer when they have solid structure.
        </Text>
      </Grid>
      <Grid spacing={4} px={4} templateColumns="repeat(3, 1fr)" gap={8}>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Decentralized Autonomous Organization
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Decentralization</ListItem>
              <ListItem>Transparency</ListItem>
              <ListItem>Incentive</ListItem>
              <ListItem>Funding</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/structure/daostructure">
              Create
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Team Solidarity
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Colloboration</ListItem>
              <ListItem>Progress</ListItem>
              <ListItem>Decide</ListItem>
              <ListItem>Chat</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/structure/teamsolidarity">
              Colloboration
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Platform Support
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Resource</ListItem>
              <ListItem>Platform</ListItem>
              <ListItem>Knowledge</ListItem>
              <ListItem>Support</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/structure/platformsupport">
              Chat
            </Button>
          </CardFooter>
        </Card>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Heading textAlign="center" color="#000" size="lg" marginBottom={8}>
          Structure First.
        </Heading>
        <Heading textAlign="center" color="#000" size="md" marginBottom={8}>
          Why 'Structure first'?
        </Heading>
        <Text m="auto" textAlign="center" textColor="#E6E6E6" maxW="80%">
          Why lay a foundation before constructing a skyscraper?
          <br />
          Because of very good reasons. Set your foundation first; and you will
          go far.
          <br />
          We have added tools here for your ease of framework.
          <br />
          Go on it. check them out and begin your journey the solid way.
        </Text>
      </Grid>
    </Box>
  );
};

export default Structure;
