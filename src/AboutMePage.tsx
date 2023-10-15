import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import AboutMe from "./contents/about-me.md";
import MarkDown from "./components/MarkDown";

export default function AboutMePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(AboutMe)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  });

  return (
    <Box pt={4} py={8} px={2} maxWidth="3xl" margin="0 auto">
      <Header title="About me" />
      <MarkDown content={content} />
    </Box>
  );
}
