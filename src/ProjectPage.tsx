import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "./projects";
import { DataType, Project, ProjectType } from "./utils/types";
import {
  Box,
  Text,
  Heading,
  Icon,
  IconButton,
  Flex,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MdArrowBack, MdOpenInNew } from "react-icons/md";
import DataTypeLabel from "./components/DataTypeLabel";
import { dataTypes, projectTypes } from "./HomePage";
import ProjectTypeLabel from "./components/ProjectTypeLabel";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project: Project = projects.filter((p) => p.id === projectId)[0];
  const { title, description, types, data, url, notes } = project;

  const navigate = useNavigate();

  function getProjectType(id: ProjectType) {
    return projectTypes.filter((type) => type.id === id)[0];
  }

  function getDataType(id: DataType) {
    return dataTypes.filter((type) => type.id === id)[0];
  }

  return (
    <>
      <Box
        height={48}
        width="100%"
        backgroundImage={`url(${process.env.PUBLIC_URL}/images/${projectId}.png)`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderBottomWidth={1}
        borderBottomColor="gray.200"
        mb={8}
      />
      <Box pb={2} margin="0 auto" maxWidth="3xl">
        <Flex direction="column" gap={8} px={4}>
          {/* title & description */}
          <Flex direction="column" gap={2}>
            <IconButton
              aria-label="Open in new tab"
              isRound={true}
              variant="solid"
              fontSize="2xl"
              size="md"
              width="fit-content"
              onClick={() => navigate("/")}
              icon={<Icon as={MdArrowBack} />}
            />
            <Heading as="h1" size="2xl">
              {title}
            </Heading>
            <Heading size="md" fontWeight={400} color="secondary">
              {description}
            </Heading>
          </Flex>
          {/* type labels */}
          <Flex direction="column" gap={2}>
            <Flex
              wrap="wrap"
              gap={2}
              borderWidth={1}
              borderColor="gray.200"
              py={1}
              px={3}
              width="fit-content"
              borderRadius={8}
            >
              {types.map((id, i) => (
                <ProjectTypeLabel key={id} {...getProjectType(id)} />
              ))}
            </Flex>
            <Flex wrap="wrap" gap={2}>
              {data?.map((id) => (
                <Box
                  key={id}
                  backgroundColor="gray.100"
                  width="fit-content"
                  py={1}
                  px={3}
                  borderRadius={8}
                >
                  <DataTypeLabel {...getDataType(id)} showData={true} />
                </Box>
              ))}
            </Flex>
          </Flex>
          {url != null && (
            <Button
              variant="project"
              rightIcon={<MdOpenInNew />}
              onClick={() => window.open(url, "_blank")}
            >
              Open project
            </Button>
          )}
          {notes != null && (
            <UnorderedList>
              {notes.map((note, i) => (
                <ListItem key={i}>
                  <span>
                    {note.action} {note.location}
                  </span>
                  {` `}
                  {note.links.map((link, i) => (
                    <Text
                      key={i}
                      textDecoration="underline"
                      display="inline-block"
                      ml={i > 0 ? 2 : 0}
                    >
                      <Link to={link} target="_blank">
                        {note.type} {note.links.length > 1 ? i + 1 : ""}
                      </Link>
                    </Text>
                  ))}
                </ListItem>
              ))}
            </UnorderedList>
          )}
        </Flex>
      </Box>
    </>
  );
}
