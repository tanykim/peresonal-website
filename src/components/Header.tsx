import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  year?: string;
  description?: string;
}
export default function Header({ title, year, description }: Props) {
  return (
    <>
      <Flex gap={1} align="center">
        <Link to="/">
          <Text variant="link">Home</Text>
        </Link>
        {/* <span className="material-symbols-outlined">chevron_right</span> */}
      </Flex>
      <Box position="sticky" top={0} backgroundColor="white" pb={4} zIndex={10}>
        <Flex align="baseline" gap={2}>
          <Heading as="h1" size="2xl" mb={1} pt={4}>
            {title}
          </Heading>
          {year != null && <Text fontSize="xl">({year})</Text>}
        </Flex>
        {description != null && (
          <Heading size="md" fontWeight={400} color="secondary">
            {description}
          </Heading>
        )}
      </Box>
    </>
  );
}
