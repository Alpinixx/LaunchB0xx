import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Link as ChakraLink,
  Button,
  Text,
  Image,
  Heading,
  Highlight,
  Center,
  theme,
} from '@chakra-ui/react';

const Landing = () => {
  return (
    <Box w="100%" bgGradient="linear(to-l, #000, #999)">
      <Center>
        <Box h={100} marginTop={100}>
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
        {/* <Box>
          <Text fontFamily="'Josefin Slab', serif">
            Where we go to get it all done
          </Text>
        </Box> */}
        <Grid></Grid>
      </Center>
      <Center>
        <Button bg="#000" color="#fff">
          Start
        </Button>
      </Center>
      <Center>
        <Image
          borderRadius="full"
          boxSize="1000px"
          src="../../assets/workbench.png"
          alt="Dan Abramov"
        />
      </Center>
    </Box>
  );
};

export default Landing;
