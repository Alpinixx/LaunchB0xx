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

  const hiddenheader = ['/launchpay', '/b0xxpay'].includes(location.pathname)
    ? 'none'
    : 'block';

  const headerStyles = {
    navItemStyles: {
      p: 2,
      m: { base: '1rem', md: '0.5rem', lg: '1rem' },
      textDecoration: 'none',
      color: '#000',
      _hover: {
        color: '#fff',
      },
      transition: 'all 0.3s ease-in-out',
    },
  };

  return (
    <Box
      as="header"
      bg={headerBgColor}
      color="white"
      w="100%"
      h={isScrolled ? '5rem' : '6rem'}
      p={4}
      transition="all 0.3s ease-in-out !important"
      position="fixed"
      display={hiddenheader}
      zIndex={10}
      boxShadow="md"
    >
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
          <Link as={NavLink} to="/">
            <Heading
              size={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md' }}
              fontWeight="bolder"
              color="#000"
              transition="all 0.3s ease-in-out !important"
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
          </Link>
        </GridItem>
        <GridItem colSpan={1} display={{ base: 'none', md: 'inline' }}>
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
        </GridItem>
        <IconButton
          display={{ base: 'inline', md: 'none' }}
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          onClick={onOpen}
          bg="transparent"
          color="white"
        />
      </Grid>
      {/* Responsive Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="#454545" p={12}>
            <DrawerCloseButton />
            <DrawerHeader textAlign="center" my={12}>
              <Heading size="md" fontWeight="bolder" color="#000">
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
