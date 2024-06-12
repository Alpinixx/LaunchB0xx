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

import ImageGraphics from '../../../assets/Graphics.png';
import ImageLeonardoAI from '../../../assets/LeonardoAI.png';
import ImageCanva from '../../../assets/Canva.png';
import ImageAptosKnowledgeBase3 from '../../../assets/AptosKnowledgeBase3.png';

const Graphics = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageGraphics}
            alt="Graphics.png: Graphics page image"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Graphics.</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            Good graphics are crucial for NFT creation as they enhance the
            visual appeal and perceived value of the NFT. Good graphics also
            attract users to social platforms by creating visually engaging
            content, increasing visibility and engagement. For tokens and NFTs,
            appealing graphics can spark interest, drive traffic, and ultimately
            increase adoption and sales.
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
            <Image src={ImageLeonardoAI} alt="LeonardoAI.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Leonardo AI</Heading>
            <Text textDecoration="underline">Ai Image Generation</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageCanva} alt="Canva.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Canva</Heading>
            <Text textDecoration="underline">Canva Photo Editor</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageAptosKnowledgeBase3}
              alt="AptosKnowledgeBase3.png"
            />
            <Heading size="sm">Aptos Knowledge Base</Heading>
            <Text textDecoration="underline">
              Contribute to the Aptos Ecosystem
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Grid>
    </Box>
  );
};

export default Graphics;
