import { Tooltip, IconButton, Icon } from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";

export default function LinkIconButton({ url }: { url: string }) {
  return (
    <Tooltip
      hasArrow
      label="Open project in new tab"
      bg="gray.700"
      color="white"
      fontSize="md"
      borderRadius={4}
      px={4}
      py={2}
      placement="top"
    >
      <IconButton
        aria-label="Open in new tab"
        isRound={true}
        variant="solid"
        fontSize="lg"
        size="sm"
        onClick={() => window.open(url, "_blank")}
        icon={<Icon as={MdOpenInNew} />}
      />
    </Tooltip>
  );
}
