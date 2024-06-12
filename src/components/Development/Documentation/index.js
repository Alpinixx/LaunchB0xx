import React from 'react';
import {
  Box,
  Grid,
  Link,
  Button,
  Text,
  Heading,
  Image,
  Stack,
  theme,
  GridItem,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';

import ImageDocumentation from '../../../assets/Documentation.png';
import ImageBitdegree from '../../../assets/Bitdegree.png';
import ImageBaptLabs from '../../../assets/BaptLabs.png';
import ImageAptosKnowledgeBase3 from '../../../assets/AptosKnowledgeBase3.png';

const Documentation = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageDocumentation}
            alt="Documentation.png: Documentation page image"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Contracts.</Heading>
          <Text>Documentation.</Text>
          <Text>
            Publishing documentation and references for a blockchain project
            fosters transparency, educates users, and builds trust. It
            accelerates development, reduces support burden, and attracts
            contributors, ultimately driving platform adoption and community
            growth.
          </Text>
          <Text>
            Below are links to resources and support within our platform and the
            Aptos sphere.
          </Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={1} p={2}>
        <GridItem colSpan={3}>
          <Text>Aptos Ecosytem Portals:</Text>
        </GridItem>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageBitdegree} alt="Bitdegree.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Bitdegree</Heading>
            <Text textDecoration="underline">Documentation Defined</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageBaptLabs} alt="BaptLabs.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Bapt Labts</Heading>
            <Text textDecoration="underline">BaptSwap Documentation</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageAptosKnowledgeBase3}
              alt="AptosKnowledgeBase3.png"
            />
            <Heading size="sm">Aptos Knowledge Base</Heading>
            <Text textDecoration="underline">Aptos Whitepaper</Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Grid>
    </Box>
  );
};

export default Documentation;
