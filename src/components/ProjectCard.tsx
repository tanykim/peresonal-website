import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { DataType, Project, ProjectType } from "../utils/types";
import { MdOpenInNew } from "react-icons/md";
import { dataTypes } from "../HomePage";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  title,
  description,
  types,
  data,
  url,
}: Project) {
  return (
    <Box>
      <Flex gap={1} mb={1}>
        {types.map((type: ProjectType) => (
          <span key={type} className={`circle ${type} small`} />
        ))}
      </Flex>
      <Flex gap={2} align="center">
        <Tooltip
          label={description}
          placement="bottom-start"
          bg="gray.700"
          color="white"
          fontSize="md"
          borderRadius={4}
          px={4}
          py={2}
        >
          <Link to={id}>
            <Heading
              as="h2"
              fontWeight={500}
              size="md"
              textDecoration="underline"
              textDecorationThickness={"1px"}
              textUnderlineOffset={"1px"}
              textDecorationColor="gray.300"
            >
              {title}
            </Heading>
          </Link>
        </Tooltip>
        <Flex gap={1} color="secondary">
          {data?.map((type: DataType) => (
            <span key={type} className="material-symbols-outlined">
              {dataTypes.filter((d) => d.id === type)[0].icon}
            </span>
          ))}
        </Flex>
        {url != null && (
          <IconButton
            aria-label="Open in new tab"
            isRound={true}
            variant="solid"
            fontSize="lg"
            size="sm"
            onClick={() => window.open(url, "_blank")}
            icon={<Icon as={MdOpenInNew} />}
          />
        )}
      </Flex>
    </Box>
  );
}
