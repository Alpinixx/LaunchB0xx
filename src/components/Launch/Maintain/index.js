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

import ImageMaintain from '../../../assets/Maintain.png';
import ImageLaunchB0xx from '../../../assets/Launchb0xx.png';
import ImageBaptLabs from '../../../assets/BaptLabs.png';
import ImageAptosKnowledgeBase3 from '../../../assets/AptosKnowledgeBase3.png';

const Maintain = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image borderRadius="12px" w="100%" src={ImageMaintain} />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Maintain.</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            Sometimes people aren’t happy with the details we creators favor.
            That’s fine. We’ll fix ‘em. Sometimes pounding a keyboard 20hrs a
            day can lead to oversights. That’s fine. We’ll fix ‘em. Sometimes,
            we wonder exactly what the hell we were thinking with the entire
            design. That’s fine. Because creating isn’t all we do. We fix, too.
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
            <Image src={ImageLaunchB0xx} alt="LaunchB0xx.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">24/7 LaunchB0xx Support team</Heading>
            <Text textDecoration="underline">
              Around the clock project support
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageBaptLabs} alt="BaptLabs.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Bapt Labs</Heading>
            <Text textDecoration="underline">Bapt LABS Documentation</Text>
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

export default Maintain;
