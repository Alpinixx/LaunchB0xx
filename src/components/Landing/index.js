import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link,
  Button,
  Text,
  Image,
  Heading,
  Highlight,
  theme,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

import ImageWorkBench from '../../assets/workbench.png';

const Landing = () => {
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
          <Highlight
            query="b0xx"
            styles={{
              px: '0',
              py: '4',
              rounded: '3px',
              bg: '#21c5b6',
              color: '#fff',
            }}
          >
            Launchb0xx
          </Highlight>
        </Heading>
      </Grid>
      <Grid alignItems="center" p={4}>
        <Text
          fontFamily="'Josefin Slab', serif"
          m={4}
          textAlign="center"
          textColor="#E6E6E6"
        >
          Where we go to get it all done
        </Text>
        <Button bg="#000" color="#fff" w={20} m="auto">
          Start.
        </Button>
      </Grid>
      <Grid px={16} py={20} alignItems="center">
        <Image
          borderRadius="8px"
          w="100%"
          src={ImageWorkBench}
          alt="workbench.png: Landing page image"
        />
      </Grid>
      <Grid alignItems="center" p={4}>
        <Heading textAlign="center" color="#000" size="lg" marginBottom={8}>
          The Sandb0xx
        </Heading>
        <Text m="auto" textAlign="center" textColor="#E6E6E6" maxW={500}>
          Here is a full-spectrum toolb0xx needed to launch your project.
        </Text>
      </Grid>
      <Grid spacing={4} px={4} templateColumns="repeat(4, 1fr)" gap={8}>
        <Card as={Link} href="/structure">
          <CardHeader>
            <Heading size="md">Structure</Heading>
          </CardHeader>
          <CardBody>
            <Text>Build a strong foundation with these systems.</Text>
          </CardBody>
          <CardFooter>
            <Text>Colloboration + Support</Text>
          </CardFooter>
        </Card>
        <Card as={Link} href="/development">
          <CardHeader>
            <Heading size="md">Development</Heading>
          </CardHeader>
          <CardBody>
            <Text>A workbench for the design of your tokens.</Text>
          </CardBody>
          <CardFooter>
            <Text>Fungible + Non Fungible</Text>
          </CardFooter>
        </Card>
        <Card as={Link} href="/presence">
          <CardHeader>
            <Heading size="md">Presence</Heading>
          </CardHeader>
          <CardBody>
            <Text>The creation of your presence online.</Text>
          </CardBody>
          <CardFooter>
            <Text>Socials + Web</Text>
          </CardFooter>
        </Card>
        <Card as={Link} href="/launch">
          <CardHeader>
            <Heading size="md">Launch</Heading>
          </CardHeader>
          <CardBody>
            <Text>The culmination of your efforts published.</Text>
          </CardBody>
          <CardFooter>
            <Text>Launch + Maintain</Text>
          </CardFooter>
        </Card>
      </Grid>
    </Box>
  );
};

export default Landing;
