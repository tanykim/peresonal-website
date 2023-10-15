import { Link, useParams } from "react-router-dom";
import { projects } from "./projects";
import { DataType, ProjectType } from "./utils/types";
import {
  Box,
  Text,
  Flex,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MdOpenInNew, MdPlayCircle } from "react-icons/md";
import DataTypeLabel from "./components/DataTypeLabel";
import { dataTypes, projectTypes } from "./HomePage";
import ProjectTypeLabel from "./components/ProjectTypeLabel";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ProjectNav from "./components/ProjectNav";

export default function ProjectPage() {
  const { projectId } = useParams();
  const index = projects.findIndex((p) => p.id === projectId);
  const {
    title,
    description,
    year,
    finalYear,
    isOngoing,
    types,
    data,
    url,
    youtube,
    notes,
  } = projects[index];

  function getProjectType(id: ProjectType) {
    return projectTypes.filter((type) => type.id === id)[0];
  }

  function getDataType(id: DataType) {
    return dataTypes.filter((type) => type.id === id)[0];
  }

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    import(`./contents/${projectId}.md`)
      .then((module) =>
        fetch(module.default)
          .then((res) => res.text())
          .then((md) => {
            setContent(md);
          })
      )
      .catch((err) => {
        setContent(null);
      });
  });

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
      <Box pt={4} pb={8} px={2} maxWidth="3xl" margin="0 auto">
        <Header
          title={title}
          year={`${year}${
            finalYear != null
              ? ` - ${finalYear}`
              : isOngoing
              ? ` - Present`
              : ""
          }`}
          description={description}
        />
        <Flex mt={4} gap={8} direction="column">
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
                <ProjectTypeLabel
                  key={id}
                  {...getProjectType(id)}
                  mr={i < types.length - 1 ? 2 : 0}
                />
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
          {(url != null || youtube != null) && (
            <Flex gap={2}>
              {url != null && (
                <Button
                  variant="project"
                  rightIcon={<MdOpenInNew />}
                  onClick={() => window.open(url, "_blank")}
                >
                  Open project
                </Button>
              )}
              {youtube != null && (
                <Button
                  variant="project"
                  rightIcon={<MdPlayCircle />}
                  onClick={() => window.open(youtube, "_blank")}
                >
                  Watch demo
                </Button>
              )}
            </Flex>
          )}
          {notes != null && (
            <UnorderedList>
              {notes.map((note, i) => (
                <ListItem key={i} fontSize="lg">
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
          {content != null && <ReactMarkdown children={content} />}
        </Flex>
        <ProjectNav
          prevProject={index > 0 ? projects[index - 1] : null}
          nextProject={index < projects.length - 1 ? projects[index + 1] : null}
        />
      </Box>
    </>
  );
}
