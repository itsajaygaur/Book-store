import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered", borderRadius: "0" }}
          variant="contained"
        >
          <Typography variant="h4">All products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
