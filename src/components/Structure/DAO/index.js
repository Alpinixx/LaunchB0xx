import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';

import ImageDAOStructure from '../../../assets/DAO.png';
import ImageMsafe from '../../../assets/Msafe.png';
import ImageThalaLabs from '../../../assets/ThalaLabs.png';
import ImageAptosKnowledgeBase1 from '../../../assets/AptosKnowledgeBase1.png';

const DAO = () => {
  return (
    <Box mt="5rem" p={16}>
      <Grid templateColumns="repeat(2, 1fr)" gap={32} p={2} mb={12}>
        <GridItem
          colSpan={{ base: 2, md: 2, lg: 1 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            borderRadius="12px"
            w="100%"
            src={ImageDAOStructure}
            alt="DAO.png: DAO Structure page image"
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          <Heading size="lg">DAO Structure</Heading>
          <Text fontSize="16px" color="#828282" textAlign="center" my={6}>
            Portals to top choices within the Aptos ecosystem.
          </Text>
          <Text fontSize="20px" color="#828282">
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
          <Text fontSize="16px" color="#828282" textAlign="center" mt={6}>
            Below are links to DAO information and creation within the Aptos
            sphere.
          </Text>
        </GridItem>
      </Grid>
      <Text fontSize="24px" p={2}>
        Aptos Ecosytem Portals:
      </Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={8}
        p={{ base: '4rem', md: 2, lg: 2 }}
      >
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://m-safe.io"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image src={ImageMsafe} alt="Msafe.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            Msafe
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            MultiSig wallet
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://thala.fi"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image src={ImageThalaLabs} alt="ThalaLabs.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            Thala Labs
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            DAO creation with Parlament
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://aptos.dev/concepts/governance/"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image
            src={ImageAptosKnowledgeBase1}
            alt="AptosKnowledgeBase1.png"
            borderRadius="8px"
          />
          <Heading size="20px" p={3}>
            Aptos Knowledge Base
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            Learn Aptos Governance
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DAO;
