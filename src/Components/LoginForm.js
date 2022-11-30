import React, { useState } from "react";
import { useReducer } from "react";
import { useTheme } from '@mui/material/styles';
import { Alert, Button, Link, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import TGI_FD from "../backendFunctions/axios";
export default function LoginForm(props) {
    const muiTheme = useTheme();
    const [loggingIn, setLoggingIn] = useState({isLogginIn: false, hasError: false});
    function reducer(state, action) {
        console.log(state, action);
        if(action.type=== "hello") alert("hello there!")
        else if(action.type === "mellow") alert("It's mellow!")
    }
    const [loginInfo, setLoginInfo] = useState({userName: null, password: null});
    async function checkLogin(e, props) {
        e.preventDefault();
        setLoggingIn({...loggingIn, isLogginIn: true});
        const checkUser = await TGI_FD.post("/user/account", loginInfo);
        let response = checkUser.data;
        if(response.wasSuccessful) {
            setTimeout(()=>{setLoggingIn({...loggingIn, isLogginIn: false});props.onLogin();}, 1000);
        }
        else {
            setTimeout(()=>{
                setLoggingIn({hasError: true, isLogginIn: false});
                setTimeout(()=>{setLoggingIn({...loggingIn, hasError: false})}, 3000);
            }, 1000);
        }
    }
    const [state, dispatch] = useReducer(reducer, "hello")
        return (
<div className={`login-modal flex a-i-c  ${props.current ? "open": null}`}>
    <form onSubmit={(e)=>{checkLogin(e, props);dispatch("hello")}} autoComplete="off">
        <fieldset>
            <label htmlFor="userName">Username</label>
            <input type="text" placeholder="" id="userName" onInput={(e)=>setLoginInfo({ ...loginInfo, userName: e.target.value})} />
        </fieldset>
        <fieldset>
            <label htmlFor="userPassword">Password</label>
            <input type="password" id="userPassword" onInput={(e)=>setLoginInfo({ ...loginInfo, password: e.target.value})} />
        </fieldset>
        <fieldset>
            <LoadingButton style={{display: "flex", width: "100%"}} loading={loggingIn.isLogginIn ? true : false} variant="contained" type="submit">All Done</LoadingButton>
            <div className="no-account-link">
                <Typography variant="p" mt={2} style={{display: "block"}}>No account? <Link href="./sign-up" style={{color: "blue"}}>Create one</Link> </Typography>
            </div>
            {/* <Button variant="contained" style={{display: "block", width: "100%"}} type="submit"></Button> */}
            {/* <button className="login-btn" type="submit"></button> */}
            <div className="py-mz-4">
            {loggingIn.hasError ? <Alert severity="error" style={{position: "absolute", width: "100%"}}>One or more of your credentials were wrong please try again</Alert>: null}
            </div>
        </fieldset>
    </form>
</div>
        )
}