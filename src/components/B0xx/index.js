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

import ImageShopTitle from '../../assets/ShopTitle.png';
import ImageF1 from '../../assets/F_1.png';
import ImageF2 from '../../assets/F_2.png';
import ImageF3 from '../../assets/F_3.png';
import ImageF4 from '../../assets/F_4.png';
import ImageF5 from '../../assets/F_5.png';
import ImageF6 from '../../assets/F_6.png';
import ImageFHeading from '../../assets/F_Heading.png';

const B0xx = () => {
  return (
    <Box mt="5rem" p={16}>
      <Box
        minH="80vh"
        maxHeight="199vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        borderRadius="8px"
        bgImg={ImageShopTitle}
      >
        <Heading size={{ base: '3xl', lg: '4xl' }}>Shop title</Heading>
        <Text maxWidth={800} color="#828282" mx="auto" mt={8} fontSize="24px">
          Subheading with description of your shopping site
        </Text>
        <Button bg="#000">Visit</Button>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={12}>
        <GridItem colSpan={1}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF1}
            alt="workbench.png"
          />
          <Heading fontSize="20px"></Heading>
          <Text color="#828282" mx="auto" mt={8} fontSize="20px"></Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF2}
            alt="workbench.png"
          />
          <Heading fontSize="20px"></Heading>
          <Text color="#828282" mx="auto" mt={8} fontSize="20px"></Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF3}
            alt="workbench.png"
          />
          <Heading fontSize="20px"></Heading>
          <Text color="#828282" mx="auto" mt={8} fontSize="20px"></Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF4}
            alt="workbench.png"
          />
          <Heading fontSize="20px"></Heading>
          <Text color="#828282" mx="auto" mt={8} fontSize="20px"></Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF5}
            alt="workbench.png"
          />
          <Heading fontSize="20px"></Heading>
          <Text color="#828282" mx="auto" mt={8} fontSize="20px"></Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF6}
            alt="workbench.png"
          />
          <Heading fontSize="20px"></Heading>
          <Text color="#828282" mx="auto" mt={8} fontSize="20px"></Text>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={16} p={16}></Grid>
    </Box>
  );
};

export default B0xx;
