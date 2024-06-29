import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';

import ImageLaunch from '../../../assets/Launch.png';
import ImageLaunchB0xx from '../../../assets/Launchb0xx.png';
import ImageBaptLabs from '../../../assets/BaptLabs.png';
import ImageAptosKnowledgeBase3 from '../../../assets/AptosKnowledgeBase3.png';

const LaunchSub = () => {
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
          <Image borderRadius="12px" w="100%" src={ImageLaunch} />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          <Heading size="lg">Launch.</Heading>
          <Text fontSize="16px" color="#828282" textAlign="center" my={6}>
            Portals to top choices within the Aptos ecosystem.
          </Text>
          <Text fontSize="20px" color="#828282">
            Send it. Here are the tools for just that:
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
          to="#"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image src={ImageLaunchB0xx} alt="Msafe.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            24/7 LaunchB0xx Support team
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            Around the clock project support
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://docs.baptlabs.com/"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image src={ImageBaptLabs} alt="ThalaLabs.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            Bapt Labs
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            Bapt LABS Documentation
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://aptos.dev/"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image
            src={ImageAptosKnowledgeBase3}
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
            Contribute to the Aptos Ecosystem
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LaunchSub;
