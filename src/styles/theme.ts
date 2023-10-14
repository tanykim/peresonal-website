import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "'Gabarito', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Libre Baskerville', -apple-system, 'Helvetica Neue', serif",
  },
  fontWeight: {
    heading: 600,
    text: 400,
  },
  styles: {
    global: {
      h1: {
        color: "gray.700",
        letterSpacing: "0.05em",
      },
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: "gray.700",
      },
      secondary: {
        default: "gray.500",
      },
    },
  },
});
