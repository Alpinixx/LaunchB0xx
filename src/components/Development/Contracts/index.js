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
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

import ImageContracts from '../../../assets/Contracts.png';
import ImageBaptLabs from '../../../assets/BaptLabs.png';
import ImageBaptSwapV2 from '../../../assets/BaptSwapV2.png';
import ImageAptosKnowledgeBase4 from '../../../assets/AptosKnowledgeBase4.png';

const Contracts = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageContracts}
            alt="Contracts.png: Contracts page image"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Contracts.</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            Smart contracts play a vital role in both token and NFT creation by
            automating processes, ensuring transparency, and enhancing security.
            In token creation, smart contracts define the token's features, such
            as supply, distribution, and functionality. For NFTs, smart
            contracts manage ownership, provenance, and royalties.
            Well-thought-out tokenomics, including supply, distribution, and
            utility, are crucial for the token's value and ecosystem
            sustainability.
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
            <Image src={ImageBaptLabs} alt="BaptLabs.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">BaptSwap Zero-code</Heading>
            <Text textDecoration="underline">BaptSwap Token Launcher</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageBaptSwapV2} alt="BaptSwapV2.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">BaptSwap V2 Smart-Contracts</Heading>
            <Text textDecoration="underline">Aptos V2 Examples</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageAptosKnowledgeBase4}
              alt="AptosKnowledgeBase4.png"
            />
            <Heading size="sm">Aptos Knowledge Base</Heading>
            <Text textDecoration="underline">Learn the MOVE Language</Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Grid>
    </Box>
  );
};

export default Contracts;
