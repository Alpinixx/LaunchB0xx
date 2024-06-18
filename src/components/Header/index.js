import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Box,
  Grid,
  GridItem,
  Button,
  Link,
  IconButton,
  Flex,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Highlight,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust this value as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();
  const headerBgColor = [
    '/launchlanding',
    '/structure',
    '/development',
    '/presence',
    '/launch',
  ].includes(location.pathname)
    ? '#454545'
    : '#fff';
  const menuIconColor = [
    '/launchlanding',
    '/structure',
    '/development',
    '/presence',
    '/launch',
  ].includes(location.pathname)
    ? '#fff'
    : '#454545';

  const hiddenheader = ['/launchpay', '/b0xxpay'].includes(location.pathname)
    ? 'none'
    : 'block';

  return (
    <Box
      as="header"
      display={hiddenheader}
      bg={headerBgColor}
      color="white"
      w="100%"
      maxW="1440px"
      h={isScrolled ? '5rem' : '6rem'}
      position="fixed"
      p={4}
      boxShadow="md"
      transition="all 0.3s ease-in-out !important"
      zIndex={10}
    >
      <Grid
        templateColumns="repeat(4, 1fr)"
        py={isScrolled ? 3 : 5}
        transition="all 0.3s ease-in-out !important"
      >
        <GridItem
          colSpan={{ base: 3, md: 1 }}
          pl={{ base: 32, lg: 12 }}
          textAlign="center"
        >
          <Heading
            size="md"
            fontWeight="bolder"
            color="#000"
            transition="all 0.3s ease-in-out !important"
            textDecoration="none"
            as={NavLink}
            to="/"
          >
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
        </GridItem>
        <GridItem
          colSpan={3}
          display={{ base: 'none', md: 'inline' }}
          color="#000"
          textAlign="right"
          pr={{ base: 4, lg: 12 }}
        >
          <Link
            as={NavLink}
            to="/structure"
            color="#000"
            textDecoration="none"
            _hover={{
              color: '#fff',
              textDecoration: 'underlined',
              textDecorationColor: '#fff',
            }}
            transition="all 0.3s ease-in-out !important"
            px={2}
          >
            Structure
          </Link>
          <Link
            as={NavLink}
            to="/development"
            color="#000"
            textDecoration="none"
            _hover={{
              color: '#fff',
              textDecoration: 'underlined',
              textDecorationColor: '#fff',
            }}
            transition="all 0.3s ease-in-out !important"
            px={2}
          >
            Development
          </Link>
          <Link
            as={NavLink}
            to="/presence"
            color="#000"
            textDecoration="none"
            _hover={{
              color: '#fff',
              textDecoration: 'underlined',
              textDecorationColor: '#fff',
            }}
            transition="all 0.3s ease-in-out !important"
            px={2}
          >
            Presence
          </Link>
          <Link
            as={NavLink}
            to="/launch"
            color="#000"
            textDecoration="none"
            _hover={{
              color: '#fff',
              textDecoration: 'underlined',
              textDecorationColor: '#fff',
            }}
            transition="all 0.3s ease-in-out !important"
            px={2}
          >
            Launch
          </Link>
          <Button color="#fff" bg="#000" as={NavLink} to="/b0xxpay">
            B0xx
          </Button>
        </GridItem>
        <GridItem
          colSpan={1}
          display={{ base: 'flex', md: 'none' }}
          justifyContent="flex-end"
        >
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={onOpen}
            bg="transparent"
            color={menuIconColor}
          />
        </GridItem>
      </Grid>
      {/* Responsive Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            bg={headerBgColor}
            transition="all 0.2s ease-out !important"
            p={12}
          >
            <DrawerCloseButton />
            <DrawerHeader textAlign="center" my={12}>
              <Heading
                size="md"
                fontWeight="bolder"
                color="#000"
                textDecoration="none"
                as={NavLink}
                to="/"
              >
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
            </DrawerHeader>
            <Divider />
            <DrawerBody mt={12}>
              <Flex direction="column" align="center" gap="4">
                <Link as={NavLink} to="/structure">
                  Structure
                </Link>
                <Link as={NavLink} to="/development">
                  Development
                </Link>
                <Link as={NavLink} to="/presence">
                  Presence
                </Link>
                <Link as={NavLink} to="/launch">
                  Launch
                </Link>
                <Link as={NavLink} to="/#">
                  B0xx
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
