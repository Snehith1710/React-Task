import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Navbar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>TasksBoard</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
