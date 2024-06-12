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

import ImageSocials from '../../../assets/Socials.png';
import ImageLaunchB0xx from '../../../assets/Launchb0xx.png';
import ImageX from '../../../assets/X.png';
import ImageDiscord from '../../../assets/Discord.png';

const Website = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image borderRadius="12px" w="100%" src={ImageSocials} />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Socials.</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            Using social networking enhances visibility, builds a community, and
            fosters engagement for an emerging blockchain project. It
            facilitates communication, gathers feedback, and attracts users and
            developers, driving platform adoption and growth.
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
            <Image src={ImageLaunchB0xx} alt="BaptLabs.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">LaunchB0xx + Telegram</Heading>
            <Text textDecoration="underline">LaunchB0xx Chat</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageX} alt="X.png" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">X</Heading>
            <Text textDecoration="underline">
              X (Formerly Known as Twitter)
            </Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image src={ImageDiscord} alt="Discord.png" />
            <Heading size="sm">Discord</Heading>
            <Text textDecoration="underline">Discord Servers</Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Grid>
    </Box>
  );
};

export default Website;
