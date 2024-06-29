// ScrollToTopButton.js
import { useEffect, useState } from 'react';
import { Button, Box, Fade } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      pos="fixed"
      bottom={{ base: '30px', md: '120px' }}
      right="30px"
      zIndex="1000"
      transition="all 0.3s ease-in-out"
    >
      <Fade in={showButton}>
        <Button
          onClick={scrollToTop}
          bg="rgba(33, 197, 182, 0.5)"
          backdropFilter="blur(8px)"
          color="white"
          _hover={{ bg: '#1da89e' }}
          borderRadius="50%"
          width="50px"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
        >
          <ChevronUpIcon boxSize="24px" />
        </Button>
      </Fade>
    </Box>
  );
};

export default ScrollToTopButton;
