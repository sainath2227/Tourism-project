import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import img1 from "./Images/Travel.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Firstpage() {
  const [isLoggedIn1, setIsLoggedIn1] = useState(false);
  const navigate1 = useNavigate();

  const handleLogin1 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn1(true);

    // Navigate to the desired route
    navigate1("/Secondpage"); // Example: Navigate to the Admin page after login
  };
  const [isLoggedIn9, setIsLoggedIn9] = useState(false);
  const navigate9 = useNavigate();

  const handleLogin9 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn9(true);

    // Navigate to the desired route
    navigate9("/Visit"); // Example: Navigate to the Admin page after login
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h1>TRAVELLER</h1>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={img1} alt="" height={650} width={1450} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            color: "#fff",
          }}
        >
          <Typography variant="h5">TOURS & TRAVEL</Typography>
          <h1>
            Let's Discover The
             World Together
          </h1>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "green" }}
            onClick={handleLogin9}
          >
            VISIT YOUR PLACES!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
