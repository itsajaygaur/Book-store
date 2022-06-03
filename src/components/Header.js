import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      {/* <AppBar sx={{ backgroundColor: "#eef6f0" }} position="sticky"> */}
      <Toolbar>
        <NavLink to="/" style={{ color: "black" }}>
          <Typography>
            <BookOutlinedIcon />
          </Typography>
        </NavLink>
        <Tabs
          sx={{ ml: "auto" }}
          textColor="none"
          indicatorColor="none"
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          <Tab LinkComponent={NavLink} to="/add" label="Add product" />
          <Tab LinkComponent={NavLink} to="/books" label="Books" />
          <Tab LinkComponent={NavLink} to="/about" label="About Us" />
        </Tabs>
      </Toolbar>
      {/* </AppBar> */}
    </div >
  );
};

export default Header;
