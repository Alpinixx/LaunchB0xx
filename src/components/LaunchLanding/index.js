import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Grid,
  GridItem,
  Center,
  Button,
  Text,
  Image,
  Heading,
  Highlight,
} from '@chakra-ui/react';

import ImageWorkBench from '../../assets/workbench.png';

const LaunchLanding = () => {
  const sandboxRef = useRef(null);
  const handleScroll = () => {
    sandboxRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      mt="5rem"
      px={8}
      py={32}
      bgGradient="linear(to-l, #000, #999)"
      alignItems="center"
    >
      <Box textAlign="center">
        <Heading lineHeight="tall" color="#000">
          <Highlight
            query="b0xx"
            styles={{
              px: '0',
              py: '4',
              rounded: '3px',
              bg: '#21c5b6',
              color: '#fff',
            }}
          >
            Launchb0xx
          </Highlight>
        </Heading>
      </Box>
      <Text
        fontFamily="'Josefin Slab', serif"
        m={4}
        textAlign="center"
        textColor="#E6E6E6"
      >
        Where we go to get it all done
      </Text>
      <Center>
        <Button onClick={handleScroll} bg="#000" color="#fff" w={20}>
          Start.
        </Button>
      </Center>
      <Box py={20} px={12} alignItems="center">
        <Image
          borderRadius="8px"
          w="100%"
          src={ImageWorkBench}
          alt="workbench.png: Landing page image"
        />
      </Box>
      <Box alignItems="center" p={4} ref={sandboxRef}>
        <Heading textAlign="center" color="#000" size="lg" marginBottom={8}>
          The Sandb0xx
        </Heading>
        <Text m="auto" textAlign="center" textColor="#E6E6E6" maxW={500}>
          Here is a full-spectrum toolb0xx needed to launch your project.
        </Text>
      </Box>
      <Grid px={4} templateColumns="repeat(4, 1fr)" gap={8} my={28}>
        <GridItem
          as={NavLink}
          to="/structure"
          colSpan={{ base: 4, md: 2, lg: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={8}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading fontSize="20px" pb={8}>
            Structure.
          </Heading>
          <Text fontSize="16px" py={4}>
            Build a strong foundation with these systems.
          </Text>
          <Heading fontSize="16px">Collaboration + Support</Heading>
        </GridItem>
        <GridItem
          as={NavLink}
          to="/structure"
          colSpan={{ base: 4, md: 2, lg: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={8}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading fontSize="20px" pb={8}>
            Development.
          </Heading>
          <Text fontSize="16px" py={4}>
            A workbench for the design of your tokens.
          </Text>
          <Heading fontSize="16px">Fungible + Non Fungible</Heading>
        </GridItem>
        <GridItem
          as={NavLink}
          to="/presence"
          colSpan={{ base: 4, md: 2, lg: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={8}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading fontSize="20px" pb={8}>
            Presence.
          </Heading>
          <Text fontSize="16px" py={4}>
            The creation of your presence online.
          </Text>
          <Heading fontSize="16px">Socials + Web</Heading>
        </GridItem>
        <GridItem
          as={NavLink}
          to="/launch"
          colSpan={{ base: 4, md: 2, lg: 1 }}
          bg="#fff"
          borderRadius="8px"
          p={8}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading fontSize="20px" pb={8}>
            Launch.
          </Heading>
          <Text fontSize="16px" py={4}>
            The culmination of your efforts published.
          </Text>
          <Heading fontSize="16px">Launch + Maintain</Heading>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default LaunchLanding;
