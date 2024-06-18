import React from 'react';
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
        maxHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        borderRadius="8px"
        bgImg={ImageShopTitle}
        bgRepeat="no-repeat"
        bgSize="100% 100%"
      >
        <Heading size={{ base: '3xl', lg: '4xl' }} color="#fff">
          Shop title
        </Heading>
        <Text maxWidth={800} color="#fff" mx="auto" my={8} fontSize="24px">
          Subheading with description of your shopping site
        </Text>
        <Button bg="#000" color="#fff">
          Button
        </Button>
      </Box>
      <Heading size="lg" mt={24} mb={8}>
        Heading
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={12}>
        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF1}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 1st product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF2}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 2nd product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF3}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 3rd product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF4}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 4th product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF5}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 5th product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF6}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 6th product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
      </Grid>

      <Heading size="lg" mt={24} mb={8}>
        Heading
      </Heading>
      <Grid
        templateRows="repeat(2, 1fr>"
        templateColumns="repeat(5, 1fr)"
        gap={16}
        p={16}
      ></Grid>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={{ base: 10, md: 6 }}>
          <Image
            borderRadius="16px"
            src={ImageFHeading}
            w="100%"
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Featured Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 6th product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 10, sm: 5, md: 4 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF1}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 6th product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
        <GridItem colSpan={{ base: 10, sm: 5, md: 4 }}>
          <Image
            borderRadius="8px"
            w="100%"
            src={ImageF4}
            alt="workbench.png"
          />
          <Heading fontSize="20px" my={4}>
            Product
          </Heading>
          <Text color="#828282" mx="auto" fontSize="20px">
            Description of 6th product
          </Text>
          <Heading fontSize="20px" my={4}>
            $10.99
          </Heading>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default B0xx;
