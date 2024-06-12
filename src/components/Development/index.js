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

const Development = () => {
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
          Development.
        </Heading>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Text
          fontFamily="'Josefin Slab', serif"
          m={4}
          textAlign="center"
          textColor="#000"
        >
          Get in the mud and dig out that gold.
        </Text>
      </Grid>
      <Grid spacing={4} px={4} templateColumns="repeat(3, 1fr)" gap={8}>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Documentation
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Decentralization</ListItem>
              <ListItem>Transparency</ListItem>
              <ListItem>Inform</ListItem>
              <ListItem>Store</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/development/documentation">
              Scribe
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Contract
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Non-Fungible Tokens</ListItem>
              <ListItem>Fungible Tokens</ListItem>
              <ListItem>Trust</ListItem>
              <ListItem>DeFi</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/development/contracts">
              Build
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Graphics
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Design</ListItem>
              <ListItem>Align</ListItem>
              <ListItem>Assemble</ListItem>
              <ListItem>Print</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/development/graphics">
              Paint
            </Button>
          </CardFooter>
        </Card>
      </Grid>
      <Grid spacing={4} px={4} templateColumns="repeat(2, 1fr)" gap={8}>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Gamification
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Narrative</ListItem>
              <ListItem>Characters</ListItem>
              <ListItem>Design</ListItem>
              <ListItem>Trade</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/development/gamification">
              Coming Soon!
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md" textAlign="center">
              Real Estate Fractionalization
            </Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <UnorderedList>
              <ListItem>Contract</ListItem>
              <ListItem>Partition</ListItem>
              <ListItem>Transfer</ListItem>
              <ListItem>Zoning</ListItem>
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <Button as={Link} href="/development/realestate">
              Coming Soon!
            </Button>
          </CardFooter>
        </Card>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Heading textAlign="center" color="#000" size="lg" marginBottom={8}>
          Dev next.
        </Heading>
        <Heading textAlign="center" color="#000" size="md" marginBottom={8}>
          Here's where the magic begins.
        </Heading>
        <Text m="auto" textAlign="center" textColor="#E6E6E6" maxW="80%">
          We have made some valuable partnerships for your benefit.
          <br />
          If you are already a blockchain guru, you know what to do.
          <br />
          If you are just starting out, or have a few clues, no worries, we got
          you.
          <br />
          We have portals to walk through.
        </Text>
      </Grid>
    </Box>
  );
};

export default Development;
