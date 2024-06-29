import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import ImageError from '../../assets/error-page.gif';

const NotFound = () => {
  return (
    <Box w="100%">
      <Image src={ImageError} m="auto" />
    </Box>
  );
};

export default NotFound;
