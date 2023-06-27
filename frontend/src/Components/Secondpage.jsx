import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Secondpage() {
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);
  const navigate2 = useNavigate();

  const handleLogin2 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn2(true);

    // Navigate to the desired route
    navigate2("/Firstpage"); // Example: Navigate to the Admin page after login
  };
  const [isLoggedIn21, setIsLoggedIn21] = useState(false);
  const navigate21 = useNavigate();

  const handleLogin21 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn21(true);

    // Navigate to the desired route
    navigate21("/Signup"); // Example: Navigate to the Admin page after login
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Add this line to vertically center the content
        height: "100vh", // Set the height of the box to full viewport height
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h2>Air BnB Tourism</h2>
      </div>

      <div>
        <Stack direction="column" spacing={4}>
          <h1 letterspacing={3}>LOGIN</h1>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField type="Password" label="Password" variant="outlined" />
          <Button variant="contained" onClick={handleLogin2}>
            Login
          </Button>
          <h4>Don't have an account?</h4>
          <Button variant="outlined" onClick={handleLogin21}>
            Create New
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
