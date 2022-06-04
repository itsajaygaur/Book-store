import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

      <Box
        display="flex" alignItems="center" justifyContent="center" flexDirection={"column"}
        sx={{
          width: { sm: 550, xs: 350 },
          height: { sm: 550, xs: 350 },
          marginTop: "50px",
          borderRadius: 100,
          backgroundColor: 'beige',
        }}
      > <Typography sx={{ fontFamily: "monospace", opacity: "75%", fontSize: { sm: "35px", xs: "20px" } }}>
          A MERN stack app with all
        </Typography>
        <Typography sx={{ fontFamily: "monospace", opacity: "75%", fontSize: { sm: "35px", xs: "20px" } }} mt="10px">
          CRUD operations
        </Typography>
      </Box>
    </div>
  );
};

export default About;
