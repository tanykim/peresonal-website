import React from "react";
import type { DataType, ProjectType } from "./utils/types";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";
import ProjectTypeLabel from "./components/ProjectTypeLabel";
import DataTypeLabel from "./components/DataTypeLabel";

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

function getMonth() {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default function Home() {
  return (
    <Box margin="0 auto" maxWidth="6xl" p={4}>
      <Flex direction="column" gap={24}>
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Tanyoung Kim
          </Heading>
          <Heading size="md" fontWeight={400} color="secondary">
            Data experience designer
          </Heading>
        </Box>
        <Box>
          <Flex wrap="wrap" gap={2} mb={2}>
            <Text mr={2} color="secondary">
              Skills
            </Text>
            <Text color="gray.200" mr={2}>
              |
            </Text>
            {projectTypes.map((type, i) => (
              <ProjectTypeLabel key={i} {...type} mr={2} />
            ))}
          </Flex>
          <Flex wrap="wrap" gap={2}>
            <Text mr={2} color="secondary">
              Data
            </Text>
            <Text color="gray.200" mr={2}>
              |
            </Text>
            {dataTypes.map((type, j) => (
              <DataTypeLabel key={type.id} {...type} mr={2} />
            ))}
          </Flex>
        </Box>
        <Flex gap={16} wrap="wrap">
          {projects
            .filter((project) => !project.isPrivate)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </Flex>
        <Text color="secondary">Last updated in {getMonth()}</Text>
      </Flex>
    </Box>
  );
}
