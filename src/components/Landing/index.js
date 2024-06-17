import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';

import ImageWorkbench from '../../assets/workbench-sm.png';
import ImageB0xx from '../../assets/b0xx.png';

const Landing = () => {
  return (
    <Box mt="5rem">
      <Box
        minH="80vh"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading size={{ base: '3xl', lg: '4xl' }}>LaunchB0xx</Heading>
        <Text maxWidth={800} color="#828282" mx="auto" mt={8} fontSize="24px">
          Here is your workbench for creating an online presence. Your project
          will go far if you use these tools to spread the word.
        </Text>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={24} p={12}>
        <GridItem
          colSpan={{ base: 2, lg: 1 }}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="xl">Launch</Heading>
          <Text maxWidth={800} color="#828282" mx="auto" my={8} fontSize="24px">
            The SandB0xx is full of tools and waiting. build your full-spectrum
            NFT or Token Aptos project here.
          </Text>
          <Button
            as={NavLink}
            w="72px"
            to="/launchpay"
            bg="#000"
            color="#fff"
            mt="auto"
            mx="auto"
          >
            Dev
          </Button>
        </GridItem>
        <GridItem
          colSpan={{ base: 2, lg: 1 }}
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <Heading size="xl">B0xx</Heading>
          <Text maxWidth={800} color="#828282" mx="auto" my={8} fontSize="24px">
            The Marketplace is in the B0xx. Jump in and get real with other
            collectors. List your NFT’s, browse others, play some games; and
            overall- have some fun!
          </Text>
          <Button
            as={NavLink}
            w="72px"
            to="/b0xxpay"
            bg="#000"
            color="#fff"
            mt="auto"
            mx="auto"
          >
            Trade
          </Button>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={16} p={16}>
        <GridItem colSpan={{ base: 2, lg: 1 }} textAlign="center">
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageWorkbench}
            alt="workbench.png"
            mb={8}
          />
          <Heading size="xl" my={4}>
            Develop Your Project
            <br />
            The Right Way.
          </Heading>
          <Box px={12} pb={24}>
            <Heading fontSize="24px">Dev.</Heading>
            <Text
              maxWidth={800}
              color="#828282"
              mx="auto"
              mt={2}
              fontSize="24px"
            >
              Build your project. From website design and socials, to token
              creation (both fungible and non-fungible), to docs and marketing;
              LaunchB0xx is your one-stop-shop to publish a winning project.
            </Text>
          </Box>
          <Box px={12} pb={24}>
            <Heading fontSize="24px">Maintain.</Heading>
            <Text
              maxWidth={800}
              color="#828282"
              mx="auto"
              mt={2}
              fontSize="24px"
            >
              We all encounter builds that need changes. From community
              complaints to complete overhauls, LaunchB0xx has your back. If it
              hasn’t been minted in a smart contract, you can change and edit
              it. The LaunchB0xx team will always be a text away to help you
              through the entire process.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }} textAlign="center">
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageB0xx}
            alt="workbench.png"
            mb={8}
          />
          <Heading size="xl" my={4}>
            Collect.
            <br />
            Trade & Stake.
          </Heading>
          <Box px={12} pb={24}>
            <Heading fontSize="24px">Collect.</Heading>
            <Text
              maxWidth={800}
              color="#828282"
              mx="auto"
              mt={2}
              fontSize="24px"
            >
              Browse through some of the top NFT’s on the Aptos Blockchain.
              collect the best of the best by hunting down the rares. Trade
              NFT’s and popular tokens with your communities, or stake them and
              gain rewards.
            </Text>
          </Box>
          <Box px={12} pb={24}>
            <Heading fontSize="24px">Communicate.</Heading>
            <Text
              maxWidth={800}
              color="#828282"
              mx="auto"
              mt={2}
              fontSize="24px"
            >
              You don’t have to make an account with us, but if you do, you will
              have access to our social media platform; where you can ask the
              team for help, or build groups where you and your community can
              execute the best strategies for success.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Box
        px={24}
        py={4}
        bg="#F7F7F7"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading size="xl">New? Don’t know what to do?</Heading>
        <Text maxWidth={750} color="#828282" mx="auto" mt={8} fontSize="24px">
          Reach out to LaunchB0xx and we’ll be there for you. Whatever it is,
          We’re there. need help understanding BaptSwap? Trouble understanding
          Development? Want to know what rewards come with which tokens and
          NFTs? Just reach out. We got you.
        </Text>
      </Box>
    </Box>
  );
};

export default Landing;
