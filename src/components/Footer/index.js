import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link as ChakraLink,
  Button,
  Text,
  Heading,
  Highlight,
  theme,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = customTheme => {
  return (
    <Box bg="#454545" w="100%" p={4} color="white">
      <Grid templateColumns="repeat(4, 1fr)" gap={12}>
        <GridItem colSpan={1} w="100%">
          <Grid
            templateRows="repeat(2, 1fr"
            templateColumns="repeat(4, 1fr)"
            gap={6}
          >
            <GridItem colSpan={4} w="100%">
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
            </GridItem>
            <GridItem w="100%" h="10">
              <Button>
                <FaFacebook />
              </Button>
            </GridItem>
            <GridItem w="100%" h="10">
              <Button>
                <FaLinkedin />
              </Button>
            </GridItem>
            <GridItem w="100%" h="10">
              <Button>
                <FaYoutube />
              </Button>
            </GridItem>
            <GridItem w="100%" h="10">
              <Button>
                <FaInstagram />
              </Button>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr sx={{ border: 'none' }}>
                  <Th>Structure:</Th>
                  <Th>Development:</Th>
                  <Th>Presence:</Th>
                  <Th>Launch:</Th>
                  <Th>B0xx:</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>DAO</Td>
                  <Td>Documentation</Td>
                  <Td>Websites</Td>
                  <Td>Assembly</Td>
                  <Td>Market</Td>
                </Tr>
                <Tr>
                  <Td>Team</Td>
                  <Td>Contracts</Td>
                  <Td>Socials</Td>
                  <Td>Launch</Td>
                  <Td>Trade</Td>
                </Tr>
                <Tr>
                  <Td>Support</Td>
                  <Td>Graphics</Td>
                  <Td>Marketing</Td>
                  <Td>Maintain</Td>
                  <Td>Interact</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
