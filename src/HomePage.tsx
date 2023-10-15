import React from "react";
import type { DataType, ProjectType } from "./utils/types";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";
import ProjectTypeLabel from "./components/ProjectTypeLabel";
import DataTypeLabel from "./components/DataTypeLabel";
import { Link } from "react-router-dom";

export const projectTypes: { id: ProjectType; label: string }[] = [
  { id: "vis", label: "Data visualization" },
  { id: "product", label: "Product design" },
  { id: "eng", label: "Front-end engineering" },
  { id: "analytics", label: "Data analytics" },
  { id: "research", label: "Research" },
];

export const dataTypes: { id: DataType; icon: string; label: string }[] = [
  { id: "personal", icon: "favorite", label: "Personal" },
  { id: "sports", icon: "sports_baseball", label: "Sports" },
  { id: "social", icon: "thumb_up", label: "Social Media" },
  { id: "other", icon: "pet_supplies", label: "Other" },
];

function getYear(): number {
  const date = new Date();
  return date.getFullYear();
}

function getMonth(): string {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  return `${month} ${getYear()}`;
}

export default function Home() {
  return (
    <Box margin="0 auto" maxWidth="6xl" px={[2, 4]} py={[4, 4, 8, 16]}>
      <Flex direction="column" gap={16}>
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Tanyoung Kim
          </Heading>
          <Heading size="md" fontWeight={400} color="secondary">
            Data experience designer
          </Heading>
        </Box>
        <Box>
          <Flex gap={2} mb={2}>
            <Text mr={2} color="secondary">
              Skills
            </Text>
            <Flex wrap="wrap" gap={2}>
              {projectTypes.map((type, i) => (
                <ProjectTypeLabel key={i} {...type} mr={2} />
              ))}
            </Flex>
          </Flex>
          <Flex gap={2}>
            <Text mr={2} color="secondary">
              Data
            </Text>
            <Flex wrap="wrap" gap={2}>
              {dataTypes.map((type, j) => (
                <DataTypeLabel key={type.id} {...type} mr={2} />
              ))}
            </Flex>
          </Flex>
        </Box>
        <Flex gap={12} wrap="wrap">
          {projects
            .filter((project) => !project.isPrivate)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </Flex>
        <Box color="secondary">
          <Flex wrap="wrap" gap={4} mb={4}>
            <Link to="/about-me">
              <Text variant="link">About me</Text>
            </Link>
            <Link to="https://www.linkedin.com/in/tanykim" target="_blank">
              <Text variant="link">LinkedIn</Text>
            </Link>
            <Link to="https://github.com/tanykim" target="_blank">
              <Text variant="link">Github</Text>
            </Link>
            <Link to="https://medium.com/@tanykim" target="_blank">
              <Text variant="link">Medium</Text>
            </Link>
          </Flex>
          <Text>Last updated in {getMonth()}</Text>
          <Text>
            Copyright © 2023{getYear() > 2023 ? ` - ${getYear()}` : ""} by
            Tanyoung Kim
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
