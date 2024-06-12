import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link,
  Button,
  Stack,
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

const Footer = () => {
  return (
    <Box as="footer" bg="#454545" w="100%" px={20} py={4} color="white">
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={1} w="100%">
          <Grid py={10}>
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
          </Grid>
          <Stack direction="row" spacing={4} align="center">
            <Link color="#828282" fontSize={20} variant="ghost">
              <FaFacebook />
            </Link>
            <Link color="#828282" variant="ghost">
              <FaLinkedin />
            </Link>
            <Link color="#828282" variant="ghost">
              <FaYoutube />
            </Link>
            <Link color="#828282" variant="ghost">
              <FaInstagram />
            </Link>
          </Stack>
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
