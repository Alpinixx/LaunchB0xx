import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    heading: "'JetBrains Mono', monospace !important",
    body: "'JetBrains Mono', monospace !important",
  },
  customStyles: {},
});

export default customTheme;
