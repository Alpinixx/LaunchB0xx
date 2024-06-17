import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';

import ImageContracts from '../../../assets/Contracts.png';
import ImageBaptLabs from '../../../assets/BaptLabs.png';
import ImageBaptSwapV2 from '../../../assets/BaptSwapV2.png';
import ImageAptosKnowledgeBase4 from '../../../assets/AptosKnowledgeBase4.png';

const Contracts = () => {
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
            src={ImageContracts}
            alt="Contracts.png: Contracts page image"
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 2, lg: 1 }}>
          <Heading size="lg">Contracts.</Heading>
          <Text fontSize="16px" color="#828282" textAlign="center" my={6}>
            Portals to top choices within the Aptos ecosystem.
          </Text>
          <Text fontSize="20px" color="#828282">
            Smart contracts play a vital role in both token and NFT creation by
            automating processes, ensuring transparency, and enhancing security.
            In token creation, smart contracts define the token's features, such
            as supply, distribution, and functionality. For NFTs, smart
            contracts manage ownership, provenance, and royalties.
            Well-thought-out tokenomics, including supply, distribution, and
            utility, are crucial for the token's value and ecosystem
            sustainability.
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
          <Image src={ImageBaptLabs} alt="Msafe.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            BaptSwap Zero-code
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            BaptSwap Token Launcher
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
          <Image src={ImageBaptSwapV2} alt="ThalaLabs.png" borderRadius="8px" />
          <Heading size="20px" p={3}>
            BaptSwap V2 Smart-Contracts
          </Heading>
          <Text
            size="20px"
            px={3}
            pb={3}
            color="#82282"
            textDecoration="underline"
          >
            Aptos V2 Examples
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
            src={ImageAptosKnowledgeBase4}
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
            Learn the MOVE Language
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contracts;
