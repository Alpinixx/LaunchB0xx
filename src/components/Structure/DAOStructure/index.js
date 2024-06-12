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

import ImageDAOStructure from '../../../assets/DAO.png';
import ImageMsafe from '../../../assets/Msafe.png';
import ImageThalaLabs from '../../../assets/ThalaLabs.png';
import ImageAptosKnowledgeBase1 from '../../../assets/AptosKnowledgeBase1.png';

const DAOStructure = () => {
  return (
    <Box p={12}>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={2}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageDAOStructure}
            alt="DAO.png: DAO Structure page image"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Heading size="lg">DAO Structure</Heading>
          <Text>Portals to top choices within the Aptos ecosystem.</Text>
          <Text>
            DAOs (Decentralized Autonomous Organizations) offer several benefits
            for both the community and the project involved. For communities,
            DAOs ensure transparent governance and direct participation in
            decision-making, empowering members by giving them a voice in
            critical matters. For projects, DAOs can provide a more democratic
            way of funding and development, facilitating collective ownership,
            and potentially increasing trust and engagement from supporters.
            These structures promote decentralization, reducing the reliance on
            a single point of failure and distributing power among members.
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
            <Image src={ImageMsafe} alt="Msafe.png" borderRadius="8px" />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Living room Sofa</Heading>
            <Text textDecoration="underline">MultiSig wallet</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageThalaLabs}
              alt="ThalaLabs.png"
              borderRadius="8px"
            />
          </CardBody>
          <CardFooter>
            <Heading size="sm">Living room Sofa</Heading>
            <Text textDecoration="underline">MultiSig wallet</Text>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={ImageAptosKnowledgeBase1}
              alt="AptosKnowledgeBase1.png"
            />
            <Heading size="sm">Living room Sofa</Heading>
            <Text textDecoration="underline">MultiSig wallet</Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Grid>
      <Text as={Link}>http://aptos.dev/concepts/governance</Text>
    </Box>
  );
};

export default DAOStructure;
