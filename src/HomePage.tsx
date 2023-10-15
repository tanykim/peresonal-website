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
  { id: "social", icon: "thumb_up", label: "Social" },
  { id: "other", icon: "pet_supplies", label: "Cultural" },
];

function getMonth() {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default function Home() {
  return (
    <Box margin="0 auto" maxWidth="4xl" my={2} p={2}>
      <Flex wrap="wrap" gap={24}>
        <Flex direction="column" gap={12} py={4} width="fit-content">
          <Box>
            <Heading as="h1" size="2xl" mb={4}>
              Tanyoung Kim
            </Heading>
            <Heading size="md" fontWeight={400} color="secondary">
              Data experience designer
            </Heading>
          </Box>
          <Flex direction="column" gap={2}>
            {projectTypes.map((type, i) => (
              <React.Fragment key={i}>
                <ProjectTypeLabel {...type} />
                {type.id === "vis" && (
                  <Flex ml={6} mt={-1} gap={2} wrap="wrap" color="secondary">
                    {dataTypes.map((type, j) => (
                      <DataTypeLabel
                        key={type.id}
                        {...type}
                        mr={j < dataTypes.length - 1 ? 2 : 0}
                      />
                    ))}
                  </Flex>
                )}
              </React.Fragment>
            ))}
          </Flex>
          <Text color="secondary">Last updated in {getMonth()}</Text>
        </Flex>
        <Flex direction="column" gap={8} py={4}>
          {projects
            .filter((project) => !project.isPrivate)
            .map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </Flex>
      </Flex>
    </Box>
  );
}
