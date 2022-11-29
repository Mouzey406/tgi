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
  const [submissionData, updateSubmissionData] = useState({});
  const [errors, setErrors] = useState({ userName: { on: false, msg: "" } });

  async function handleSubmit(e) {
    e.preventDefault();
    if (submissionData.userName === "") {
      setErrors({
        ...errors,
        userName: { on: true, msg: "Please enter a username" },
      });
    } else {
      setErrors({ ...errors, userName: { on: false, msg: "" } });
      try {
        let checkUsername = await fetch(
          `http://localhost:302/v1/find/${submissionData.userName}`
        );
        let returnedData = await checkUsername.json();
        console.log(returnedData)
        if (returnedData.wasSuccessful && returnedData.straightBool) {
          setErrors({ ...errors, userName: { on: true, msg: "This username is already taken" } });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <ThemeProvider theme={MuiTheme}>
      <Container style={{ minHeight: "100vh" }}>
        <Box>
          <Form
            style={{ maxWidth: 700, margin: "120px auto" }}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <FormControl fullWidth>
              <InputLabel style={{ left: -14 }} htmlFor="u-input">
                Username
              </InputLabel>
              <Input
                id="u-input"
                p={0}
                onInput={(e) =>
                  updateSubmissionData({
                    ...submissionData,
                    userName: e.target.value,
                  })
                }
              ></Input>
              <div className="ps">
              {errors.userName.on ? (
                <Alert severity="error" className="mz-alert">{errors.userName.msg}</Alert>
              ) : null}
              </div>
            </FormControl>

            <div style={{ marginTop: 30 }}></div>

            <FormControl fullWidth>
              <InputLabel style={{ left: -14 }} htmlFor="e-input">
                Email
              </InputLabel>
              <Input
                type="email"
                id="e-input"
                p={0}
                onInput={(e) =>
                  updateSubmissionData({
                    ...submissionData,
                    email: e.target.value,
                  })
                }
              ></Input>
            </FormControl>

            <div style={{ marginTop: 30 }}></div>

            <FormControl fullWidth>
              <InputLabel htmlFor="p-input" style={{ left: -14 }}>
                Password
              </InputLabel>
              <Input
                id="p-input"
                type="password"
                onInput={(e) =>
                  updateSubmissionData({
                    ...submissionData,
                    password: e.target.value,
                  })
                }
              ></Input>
            </FormControl>

            <div style={{ marginTop: 30 }}></div>

            <Button variant="contained" fullWidth type="submit">
              Create an account
            </Button>
          </Form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
