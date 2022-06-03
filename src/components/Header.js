import React, { useState } from "react";
import { Tab, Tabs, Toolbar, Typography } from "@mui/material";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
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
    </div >
  );
};

export default Header;
