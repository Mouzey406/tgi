import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  ThemeProvider,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Form } from "react-router-dom";
import { MuiTheme } from "./Themes/Theme";

export default function SignUp() {

  return (
    <ThemeProvider theme={MuiTheme}>
      <Container style={{ minHeight: "100vh" }}>
        <Box>
          <Form
            style={{ maxWidth: 700, margin: "120px auto" }}
            autoComplete="off"
          >
            <FormControl fullWidth>
              <InputLabel style={{ left: -14 }} htmlFor="u-input">
                Username
              </InputLabel>
              <Input
                id="u-input"
                p={0}
              
              ></Input>
              <div className="ps">
                
              </div>
            </FormControl>

            <div style={{ marginTop: 40 }}></div>

            <FormControl fullWidth>
              <InputLabel style={{ left: -14 }} htmlFor="e-input">
                Email
              </InputLabel>
              <Input
                type="email"
                id="e-input"
                p={0}
                
              ></Input>
              <div className="ps">
                
              </div>
            </FormControl>

            <div style={{ marginTop: 40 }}></div>

            <FormControl fullWidth>
              <InputLabel htmlFor="p-input" style={{ left: -14 }}>
                Password
              </InputLabel>
              <Input
                id="p-input"
                type="password"
                
              ></Input>
            </FormControl>

            <div style={{ marginTop: 40 }}></div>

            <Button variant="contained" fullWidth type="submit">
              Create an account
            </Button>
          </Form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
