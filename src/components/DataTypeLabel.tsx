import { Flex, Text } from "@chakra-ui/react";
import { DataType } from "../utils/types";

export default function DataTypeLabel({
  id,
  icon,
  label,
  showData = false,
  mr = 0,
}: {
  id: DataType;
  icon: string;
  label: string;
  showData?: boolean;
  mr?: number;
}) {
  return (
    <Flex key={id} align="center" gap={1} mr={mr}>
      <span className="material-symbols-outlined">{icon}</span>
      <Text>
        {label}
        {showData ? `${id === "other" ? " cultural" : ""} data` : ""}
      </Text>
    </Flex>
  );
}
