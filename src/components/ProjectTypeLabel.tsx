import { Flex, Text } from "@chakra-ui/react";
import { ProjectType } from "../utils/types";

export default function ProjectTypeLabel({
  id,
  label,
  mr = 0,
}: {
  id: ProjectType;
  label: string;
  mr?: number;
}) {
  return (
    <Flex align="center" gap={2} mr={2}>
      <span className={`circle ${id}`} />
      <Text>{label}</Text>
    </Flex>
  );
}
