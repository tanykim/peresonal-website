import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const projectButton = defineStyle({
  background: "gray.700",
  color: "white",
  fontWeight: 400,
  width: "fit-content",
  fontSize: "xl",
  height: "3em",
  paddingInlineStart: "1.25em",
  paddingInlineEnd: "1.25em",
  letterSpacing: "0.05em",
  _hover: {
    background: "gray.900",
  },
});

const buttonTheme = defineStyleConfig({
  variants: { project: projectButton },
});

export const theme = extendTheme({
  fonts: {
    heading: "'Gabarito', -apple-system, 'Helvetica Neue', serif",
    body: "'Gabarito', -apple-system, 'Helvetica Neue', serif",
  },
  styles: {
    global: {
      h1: {
        color: "gray.700",
        letterSpacing: "0.1em",
        fontWeight: 600,
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
  components: {
    Button: buttonTheme,
  },
});
