import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [isLoggedIn3, setIsLoggedIn3] = useState(false);
  const navigate3 = useNavigate();

  const handleLogin3 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn3(true);

    // Navigate to the desired route
    navigate3("/Secondpage"); // Example: Navigate to the Admin page after login
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="column" spacing={5} alignItems={"center"}>
        <h1>SIGN UP</h1>
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Second Name" variant="standard" />
        <TextField id="standard-basic" label="User Name" variant="standard" />
        {/* <TextField id="standard-basic" label="Password" variant="standard" /> */}
        <TextField type="Password" label="Password" variant="standard"/>
        <Button variant="contained" onClick={handleLogin3}>
          {" "}
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
