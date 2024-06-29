import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';

import ImageTeam from '../../../assets/Team.png';
import ImageWorkOtter from '../../../assets/WorkOtter.png';
import ImageTelegramMessenger from '../../../assets/TelegramMessenger.png';
import ImageAptosKnowledgeBase2 from '../../../assets/AptosKnowledgeBase2.png';

const Team = () => {
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
            src={ImageTeam}
            alt="Support.png: Platform Support page image"
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          <Heading size="lg">Team Structure.</Heading>
          <Text fontSize="16px" color="#828282" textAlign="center" my={6}>
            Portals to top choices within the Aptos ecosystem.
          </Text>
          <Text fontSize="20px" color="#828282">
            A well-structured project team ensures diverse expertise, effective
            collaboration, and efficient project management. For a global crypto
            project, form a solid team by identifying key roles (e.g.,
            developers, marketers, community managers) and recruiting talent
            with relevant experience and a strong commitment to the project's
            goals. Utilize online collaboration tools and establish clear
            communication channels to overcome geographical barriers.
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
          to="https://workotter.com/lp/ta/project-management-software/"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image src={ImageWorkOtter} alt="Msafe.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            Work Otter
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            Project Management Software
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://telegram.org/"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image
            src={ImageTelegramMessenger}
            alt="ThalaLabs.png"
            borderRadius="8px"
          />
          <Heading size="20px" p={3}>
            Telegram Messenger
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            Team chat
          </Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          as={NavLink}
          cursor="pointer"
          to="https://aptos.dev/community/"
          target="_blank"
          _hover={{ shadow: 'lg' }}
          transition="all 0.3s ease"
          borderRadius="8px"
        >
          <Image
            src={ImageAptosKnowledgeBase2}
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

export default Team;
