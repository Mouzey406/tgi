import React, { useState } from "react";
import { MainTheme } from "../routes/Themes/Theme";
import { Button, Link, Popover, Typography } from "@mui/material";
export default function User() {
    const [popOpener, togglePopOpener] = useState(undefined);
  return (
    <>
      <Button
        variant="text"
        aria-desribedBy="pp-e1"
        style={{
          fontSize: 12,
          fontFamily: "'Cinzel', serif",
          fontWeight: "600",
        }}
        onClick={(e) => togglePopOpener(e.currentTarget)}
        type="button"
      >
        Mozaski
      </Button>
      <Popover id="pp-e1" open={Boolean(popOpener)} style={{borderRadius: "7px"}} onClose={(e)=>togglePopOpener(undefined)} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} anchorEl={popOpener}>
            <div style={{padding:"0 20px"}}>
            <Link href="./dashboard" underline="hover" mt={2}>Dashboard</Link>
            <Link href="./dashboard" underline="hover" my={2}>Logout</Link>
            </div>
        </Popover>
    </>
  );
}
