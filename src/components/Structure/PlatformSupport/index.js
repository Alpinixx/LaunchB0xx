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

import ImageSupport from '../../../assets/Support.png';
import ImageLaunchB0xx from '../../../assets/Launchb0xx.png';
import ImageBaptLabs from '../../../assets/BaptLabs.png';
import ImageAptosKnowledgeBase3 from '../../../assets/AptosKnowledgeBase3.png';

const PlatformSupport = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageSupport}
            alt="Support.png: Platform Support page image"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Platform Support</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            Customer service and other resources provide critical support for a
            hard-working blockchain project. They enhance user experience,
            resolve issues promptly, and build trust. Access to resources like
            tutorials and documentation accelerates development, aiding in
            platform adoption and community growth.
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

export default PlatformSupport;
