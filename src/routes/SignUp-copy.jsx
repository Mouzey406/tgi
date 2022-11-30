import React from "react";
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
import { Form, Navigate } from "react-router-dom";
import { MuiTheme } from "./Themes/Theme";
import updateState from "../globalFunctions/updateState";
import TGI_FD from "../backendFunctions/axios";
import LoadingButton from "@mui/lab/LoadingButton";

export default function SignUp() {
  const [isCreating, setCreation] = useState(false)
  const [newAccount, setSuccess] = useState(false);
  const [submissionData, updateSubmissionData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const createErrors = () => {
    const obJ = {};
    const errorFields = ["userName", "email", "password"];
    for (const errField of errorFields) {
      obJ[errField] = { on: false, msg: "" };
    }
    return obJ;
  };
  const [errors, setErrors] = React.useState(createErrors);

  async function handleSubmit(e) {
    e.preventDefault();
    if(newAccount) return;
    console.log(submissionData);
    if (submissionData.userName === "") {
       updateState(setErrors, {
        userName: { on: true, msg: "Please enter a username" },
      });
    } else {
       updateState(setErrors, { userName: { on: false, msg: "" } });
      let checkUsername = await fetch(
        `http://localhost:302/v1/find/${submissionData.userName}`
      );
      let returnedData = await checkUsername.json();
      if (returnedData.wasSuccessful && returnedData.straightBool) {
        updateState(setErrors, {
          userName: { on: true, msg: "This username already exists" },
        });
      }
    }

    if (submissionData.email === "") {
      updateState(setErrors, {
        email: { on: true, msg: "Please enter an email" },
      });
    } else {
      updateState(setErrors, { email: { on: false, msg: "" } });
    }

    if (submissionData.password === "") {
        console.log(errors, "on reaching password");
      updateState(setErrors, { password: { on: true, msg: "Your password should have atleast 6 characters" } });
    } else {
      updateState(setErrors, { password: { on: false, msg: "" } });
    }

    console.log(errors); //testing

    
    if(!errors.password.on && !errors.userName.on && !errors.email.on) {
        setCreation(true)
        const attemptNewRecord = await TGI_FD.post("/new/user", submissionData);
        const response = attemptNewRecord.data;
        console.log(response);
        if(response.wasSuccessful && response.resultCount > 0) {
            setTimeout(()=>{setSuccess(true); setCreation(false); 
            setTimeout(()=>{window.location = "./"}, 1500);
            }, 2000);
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
                error={errors.userName.on ? true : false}
              ></Input>
              <div className="ps">
                {errors.userName.on ? (
                  <Alert severity="error" className="mz-alert">
                    {errors.userName.msg}
                  </Alert>
                ) : null}
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
                onInput={(e) =>
                  updateSubmissionData({
                    ...submissionData,
                    email: e.target.value,
                  })
                } 
                error={errors.email.on ? true : false}
              ></Input>
              <div className="ps">
                {errors.email.on ? (
                  <Alert severity="error" className="mz-alert">
                    {errors.email.msg}
                  </Alert>
                ) : null}
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
                onInput={(e) =>
                  updateSubmissionData({
                    ...submissionData,
                    password: e.target.value,
                  })
                } 
                error={errors.password.on ? true : false}
              ></Input>
              <div className="ps">
                {errors.password.on ? <Alert severity="error" className="mz-alert">{errors.password.msg}</Alert>: null}
              </div>
            </FormControl>

            <div style={{ marginTop: 40 }}></div>
           {newAccount ? (<Alert severity="success">New account created successfully</Alert>):  <LoadingButton variant="contained" type="submit" fullWidth loading={isCreating ? true : false}>Create an account</LoadingButton>}
          </Form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
