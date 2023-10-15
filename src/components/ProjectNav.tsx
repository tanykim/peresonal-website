import { Flex, Text } from "@chakra-ui/react";
import { Project } from "../utils/types";
import { Link } from "react-router-dom";

interface Props {
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNav({ prevProject, nextProject }: Props) {
  return (
    <Flex
      justify="space-between"
      width="100%"
      borderTopWidth={1}
      borderTopColor="gray.200"
      mt={8}
      pt={8}
    >
      {prevProject != null && (
        <Flex gap={1} align="center">
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            arrow_back
          </span>
          <Link to={`/${prevProject.id}`}>
            <Text variant="link">{prevProject.title}</Text>
          </Link>
        </Flex>
      )}
      {nextProject != null && (
        <Flex gap={1} align="center">
          <Link to={`/${nextProject.id}`}>
            <Text variant="link">{nextProject.title}</Text>
          </Link>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            arrow_forward
          </span>
        </Flex>
      )}
    </Flex>
  );
}
