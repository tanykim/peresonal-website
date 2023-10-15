import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/react";

export default function MarkDown({ content }: { content: string }) {
  return (
    <Box className="markdown">
      <ReactMarkdown children={content} />
    </Box>
  );
}
