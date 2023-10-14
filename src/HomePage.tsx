import React from "react";
import type { DataType, ProjectType } from "./utils/types";
import { Box, Flex, Text, Heading, Icon, IconButton } from "@chakra-ui/react";
import { projects } from "./projects";
import { MdOpenInNew } from "react-icons/md";
import Project from "./ProjectPage";
import ProjectCard from "./components/ProjectCard";

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
    <Flex
      width="100%"
      minHeight="100vh"
      justify="center"
      gap={24}
      align="center"
      wrap="wrap"
    >
      <Flex direction="column" gap={12}>
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Tanyoung Kim
          </Heading>
          <Text fontSize="2xl" color="secondary">
            Data experience designer
          </Text>
        </Box>
        <Flex direction="column" gap={3}>
          {projectTypes.map((type) => (
            <React.Fragment key={type.id}>
              <Flex align="center" gap={3}>
                <span className={`circle ${type.id}`} />
                <Text>{type.label}</Text>
              </Flex>
              {type.id === "vis" && (
                <Flex ml={6} mt={-1} gap={4} wrap="wrap" color="secondary">
                  {dataTypes.map((type) => (
                    <Flex key={type.id} align="center" gap={1}>
                      <span className="material-symbols-outlined">
                        {type.icon}
                      </span>
                      <Text>{type.label}</Text>
                    </Flex>
                  ))}
                </Flex>
              )}
            </React.Fragment>
          ))}
        </Flex>
        <Text color="secondary">Last updated in {getMonth()}</Text>
      </Flex>
      <Flex direction="column" gap={8}>
        {projects
          .filter((project) => !project.isPrivate)
          .map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </Flex>
    </Flex>
  );
}
