import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* <Box display="flex" flexDirection="column" alignItems="center" backgroundColor="blue ">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN STACK
        </Typography>
      </Box> */}

      <Box
        display="flex" alignItems="center" justifyContent="center" flexDirection={"column"}
        sx={{
          width: 550,
          height: 550,
          borderRadius: 100,
          backgroundColor: 'beige',
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      > <Typography sx={{ fontFamily: "monospace", opacity: "75%" }} variant="h4">
          A MERN stack app with all
        </Typography>
        <Typography sx={{ fontFamily: "monospace", opacity: "75%" }} variant="h4" mt="10px">
          CRUD operations
        </Typography>
      </Box>
    </div>
  );
};

export default About;
