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
import LinkIconButton from "./LinkIconButton";

export default function ProjectCard({
  id,
  title,
  description,
  types,
  data,
  url,
}: Project) {
  return (
    <Flex direction="column" gap={4} minWidth="xs">
      <Tooltip
        hasArrow
        label={description}
        bg="gray.700"
        color="white"
        fontSize="md"
        borderRadius={4}
        px={4}
        py={2}
        placement="top"
      >
        <Link to={id}>
          <Box
            backgroundImage={`url(${process.env.PUBLIC_URL}/images/${id}-sm.png)`}
            backgroundSize="cover"
            backgroundPosition="10% 15%"
            height="120px"
            width="100%"
            backgroundClip="content-box"
            borderRadius={8}
            borderWidth="1px"
            borderColor="gray.300"
            // filter="grayscale(0.95)"
            filter="blur(1px)"
            opacity={0.6}
            _hover={{
              filter: "none",
              opacity: "1",
              borderWidth: "2px",
              borderColor: "gray.100",
            }}
          />
        </Link>
      </Tooltip>
      <Flex gap={2} justify="space-between">
        <Flex direction="column" gap={1}>
          <Flex gap={2} align="center">
            <Heading as="h2" size="md" fontWeight={400}>
              {title}
            </Heading>
            <Flex gap={1}>
              {types.map((type: ProjectType) => (
                <span key={type} className={`circle ${type} small`} />
              ))}
            </Flex>
          </Flex>
          <Flex gap={1} color="secondary">
            {data?.map((type: DataType) => (
              <span key={type} className="material-symbols-outlined">
                {dataTypes.filter((d) => d.id === type)[0].icon}
              </span>
            ))}
          </Flex>
        </Flex>
        {url != null && <LinkIconButton url={url} />}
      </Flex>
    </Flex>
  );
}
