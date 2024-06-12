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

import ImageTeam from '../../../assets/Team.png';
import ImageWorkOtter from '../../../assets/WorkOtter.png';
import ImageTelegramMessenger from '../../../assets/TelegramMessenger.png';
import ImageAptosKnowledgeBase2 from '../../../assets/AptosKnowledgeBase2.png';

const TeamSolidarity = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageTeam}
            alt="Support.png: Platform Support page image"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">Team Structure.</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            A well-structured project team ensures diverse expertise, effective
            collaboration, and efficient project management. For a global crypto
            project, form a solid team by identifying key roles (e.g.,
            developers, marketers, community managers) and recruiting talent
            with relevant experience and a strong commitment to the project's
            goals. Utilize online collaboration tools and establish clear
            communication channels to overcome geographical barriers.
          </Text>
          <Text>
            Below are links to DAO information and creation within the Aptos
            sphere.
          </Text>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={1} p={2}>
        <GridItem colSpan={3}>
          <Text>Aptos Ecosytem Portals:</Text>
        </GridItem>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageWorkOtter}
              alt="WorkOtter.png"
              borderRadius="8px"
            />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Work Otter</Heading>
            <Text textDecoration="underline">Project Management Software</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageTelegramMessenger}
              alt="TelegramMessenger.png"
              borderRadius="8px"
            />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Telegram Messenger</Heading>
            <Text textDecoration="underline">Team chat</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageAptosKnowledgeBase2}
              alt="AptosKnowledgeBase2.png"
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

export default TeamSolidarity;
