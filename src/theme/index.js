import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    heading: "'JetBrains Mono', monospace",
    body: "'JetBrains Mono', monospace",
  },
  components: {
    Table: {
      baseStyle: {
        table: {
          border: 'none',
        },
        th: {
          borderBottom: 'none',
        },
        td: {
          borderBottom: 'none',
        },
        tr: {
          borderBottom: 'none',
        },
      },
    },
  },
});

export default customTheme;
