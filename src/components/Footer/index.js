import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Box,
  Grid,
  GridItem,
  Stack,
  Heading,
  Highlight,
  Link,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from '@chakra-ui/react';

import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();

  // Determine the background color based on the current URL path
  const footerBgColor = [
    '/launchlanding',
    '/structure',
    '/development',
    '/presence',
    '/launch',
  ].includes(location.pathname)
    ? '#454545'
    : '#fff';

  const subLinkColor = [
    '/launchlanding',
    '/structure',
    '/development',
    '/presence',
    '/launch',
  ].includes(location.pathname)
    ? '#fff'
    : '#454545';

  const hiddenfooter = ['/launchpay', '/b0xxpay'].includes(location.pathname)
    ? 'none'
    : 'block';

  const footerStyles = {
    mainLinkStyles: {
      color: '#000',
      fontSize: '16px',
      textDecoration: 'none',
      _hover: {
        color: '#222',
        textDecoration: 'underline',
        textDecorationColor: '#222',
      },
      transition: 'all 0.3s ease !important',
    },
    subLinkStyles: {
      fontSize: '16px',
      textDecoration: 'none',
      _hover: {
        color: '#888',
      },
      transition: 'all 0.3s ease !important',
    },

    socialsColor: {
      color: '#828282',
      _hover: {
        color: '#222 !important',
      },
    },
  };
  const mainTemplateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(4, 1fr)',
  });
  const subTemplateColumns = useBreakpointValue({
    base: 'repeat(6, 1fr)', // Phone: 2 columns for first and second rows, 1 column for the third row
    md: 'repeat(6, 1fr)', // Tablet: 3 columns for the first row
    lg: 'repeat(6, 1fr)', // Desktop: 5 columns
  });
  const subTemplateRows = {
    base: 'repeat(3, auto)', // Phone: 3 rows
    md: 'repeat(2, auto)', // Tablet: 2 rows
    lg: '1fr', // Desktop: 1 row
  };

  return (
    <Box
      as="footer"
      bg={footerBgColor}
      w="100%"
      px={20}
      pb={8}
      display={hiddenfooter}
      transition="all 0.3s ease-in-out !important"
    >
      <Grid
        templateColumns={mainTemplateColumns}
        pt={4}
        gap={4}
        borderTop="1px solid #e6e6e6"
      >
        <GridItem
          colSpan={{ base: 4, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          transition="all 0.3s ease-in-out !important"
        >
          <Grid>
            <GridItem colSpan={1}>
              <Heading
                py={10}
                size={{ base: '2xl', sm: '2xl', md: 'lg', lg: 'md' }}
                lineHeight="tall"
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
            </GridItem>
            <GridItem>
              <Stack
                direction="row"
                spacing={{ base: 12, sm: 10, md: 8, lg: 4 }}
                align="center"
                fontSize={{ base: 'md', sm: '2xl', md: 'xl', lg: 'lg' }}
                transition="all 0.3s ease-in-out !important"
              >
                <Link
                  as={NavLink}
                  style={footerStyles.socialsColor}
                  variant="ghost"
                  to="#"
                >
                  <FaFacebook />
                </Link>
                <Link
                  as={NavLink}
                  style={footerStyles.socialsColor}
                  variant="ghost"
                  to="#"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  as={NavLink}
                  style={footerStyles.socialsColor}
                  variant="ghost"
                  to="#"
                >
                  <FaYoutube />
                </Link>
                <Link
                  as={NavLink}
                  style={footerStyles.socialsColor}
                  variant="ghost"
                  to="#"
                >
                  <FaInstagram />
                </Link>
              </Stack>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          colSpan={{ base: 4, md: 3 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          transition="all 0.3s ease-in-out !important"
        >
          <Grid
            templateColumns={subTemplateColumns}
            templateRows={subTemplateRows}
            gap={{
              base: 4,
              lg: 8,
              xl: 16,
            }}
            transition="all 0.3s ease-in-out !important"
          >
            <GridItem colSpan={{ base: 3, md: 2, lg: 1 }}>
              <UnorderedList
                styleType="none"
                spacing={{ base: 2, sm: 1, lg: 4 }}
              >
                <ListItem>
                  <Heading>
                    <Link
                      as={NavLink}
                      sx={footerStyles.mainLinkStyles}
                      to="/structure"
                    >
                      Structure:
                    </Link>
                  </Heading>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/structure/dao"
                  >
                    DAO
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/structure/team"
                  >
                    Team
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/structure/support"
                  >
                    Support
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2, lg: 1 }}>
              <UnorderedList
                styleType="none"
                spacing={{ base: 2, sm: 1, lg: 4 }}
              >
                <ListItem>
                  <Heading>
                    <Link
                      as={NavLink}
                      sx={footerStyles.mainLinkStyles}
                      to="/development"
                    >
                      Development:
                    </Link>
                  </Heading>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/development/documentation"
                  >
                    Documentation
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/development/contracts"
                  >
                    Contracts
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/development/graphics"
                  >
                    Graphics
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2, lg: 1 }}>
              <UnorderedList
                styleType="none"
                spacing={{ base: 2, sm: 1, lg: 4 }}
              >
                <ListItem>
                  <Heading>
                    <Link
                      as={NavLink}
                      sx={footerStyles.mainLinkStyles}
                      to="/presence"
                    >
                      Presence:
                    </Link>
                  </Heading>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/presence/website"
                  >
                    Website
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/presence/socials"
                  >
                    Socials
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/presence/marketing"
                  >
                    Marketing
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 3, lg: 1 }}>
              <UnorderedList
                styleType="none"
                spacing={{ base: 2, sm: 1, lg: 4 }}
              >
                <ListItem>
                  <Heading>
                    <Link
                      as={NavLink}
                      sx={footerStyles.mainLinkStyles}
                      to="/launch"
                    >
                      Launch:
                    </Link>
                  </Heading>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/launch/assembly"
                  >
                    Assembly
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/launch/launchsub"
                  >
                    Launch
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="/launch/maintain"
                  >
                    Maintain
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
              <UnorderedList
                styleType="none"
                spacing={{ base: 2, sm: 1, lg: 4 }}
              >
                <ListItem>
                  <Heading>
                    <Link as={NavLink} sx={footerStyles.mainLinkStyles} to="#">
                      B0xx:
                    </Link>
                  </Heading>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="#"
                  >
                    Market
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="#"
                  >
                    Trade
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={NavLink}
                    sx={footerStyles.subLinkStyles}
                    color={subLinkColor}
                    to="#"
                  >
                    Interact
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
