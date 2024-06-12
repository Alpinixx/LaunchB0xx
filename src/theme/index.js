import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    heading: "'JetBrains Mono', monospace",
    body: "'JetBrains Mono', monospace",
  },
  components: {
    Tr: {
      baseStyle: {
        tr: {
          border: 'none',
        },
      },
    },
    Card: {
      baseStyle: {
        bg: '#FFF',
        borderColor: '#f00',
      },
    },
    Link: {
      baseStyle: {
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Button: {
      baseStyle: {
        bg: '#000',
        color: '#fff',
        _hover: {
          color: '#000',
        },
      },
    },
  },
});

export default customTheme;
