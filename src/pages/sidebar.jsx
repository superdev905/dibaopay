import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Sidebardropdown from "../components/sidebardropdown";
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container sx={{ textAlign: "center", color: "white" }}>
        <Typography
          paddingTop="32px"
          paddingBottom="20px"
          variant="h5"
        >
          DIBAO PAY CONTROL
        </Typography>
        <Divider color="white"/>
        <Sidebardropdown name="asd" />
      </Container>
    </div>
  );
};

export default Sidebar;
