import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  theme,
} from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  return (
    <Box as="header" bg="#454545" w="100%" px={4} py={6} color="white">
      <Grid templateColumns="repeat(6, 1fr)" alignItems="center" gap={6}>
        <GridItem colSpan={1}>
          <Link href="/">Launchb0xx</Link>
        </GridItem>
        <GridItem
          colSpan={5}
          display={['none', 'none', 'flex', 'flex']}
          justifyContent="flex-end"
          gap={6}
        >
          <Link
            href="/structure"
            _hover={{ textDecoration: 'none', color: '#000' }}
          >
            Structure
          </Link>
          <Link
            href="/development"
            _hover={{ textDecoration: 'none', color: '#000' }}
          >
            Development
          </Link>
          <Link
            href="/presence"
            _hover={{ textDecoration: 'none', color: '#000' }}
          >
            Presence
          </Link>
          <Link
            href="/launch"
            _hover={{ textDecoration: 'none', color: '#000' }}
          >
            Launch
          </Link>
          <Link href="/b0xx" _hover={{ textDecoration: 'none', color: '#000' }}>
            <Button bg="#000" color="#fff" borderRadius="8px">
              b0xx
            </Button>
          </Link>
          <GridItem
            colSpan={5}
            display={['flex', 'flex', 'none', 'none']}
            justifyContent="flex-end"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FaHamburger />}
                variant="outline"
                color="white"
              />
              <MenuList>
                <MenuItem as={Link} href="/">
                  Landing
                </MenuItem>
                <MenuItem as={Link} href="/structure">
                  Structure
                </MenuItem>
                <MenuItem as={Link} href="/development">
                  Development
                </MenuItem>
                <MenuItem as={Link} href="/presence">
                  Presence
                </MenuItem>
                <MenuItem as={Link} href="/launch">
                  Launch
                </MenuItem>
                <MenuItem as={Link} href="/b0xx">
                  b0xx
                </MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
