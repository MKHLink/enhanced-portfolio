import React, { useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'

function Resume() {
  const [loading, setLoading] = useState(true);

  const handleResumeLoad = () => {
    setLoading(false);
  };

  return (
    <section className="resume">
      <a
        href="https://drive.google.com/uc?export=download&id=1z_64Y2-1lHhEMX6RVlKPZ6xAnJzonwek"
        target="_blank"
        rel="noopener noreferrer"
      >
    <Button colorScheme='teal' variant='solid' margin="10px">
    Download
  </Button>
  </a>
            <br />

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="500px"
        >
          <Spinner size="xl" />
        </Box>
      ) : null}
      <div style={{ width: "70%", height: "100vh", display: loading ? "none" : "block" }}>
        <iframe
          title="Resume"
          src="https://drive.google.com/file/d/1z_64Y2-1lHhEMX6RVlKPZ6xAnJzonwek/preview"
          width="100%"
          height="100%"
          onLoad={handleResumeLoad}
        ></iframe>
      </div>
    </section>
  );
}

export default Resume;
