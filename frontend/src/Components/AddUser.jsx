import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    MobileNumber: "",
    email: "",
  });

  const { name, mobile, email } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:8080/adduser", userData);
    setUserData({ name: "", mobile: "", email: "" });
    navigate("/BasicTable");
  };
  const [isLoggedIn9, setIsLoggedIn9] = useState(false);
  const navigate9 = useNavigate();

  const handleLogin9 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn9(true);

    // Navigate to the desired route
    navigate9("/BasicTable"); // Example: Navigate to the Admin page after login
  };

  return (
    <Container>
      <div>
        <h2>FILL YOUR DETAILS</h2>      
      </div>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="Mobile"
              name="mobile"
              value={mobile}
              onChange={handleData}
            />
            <TextField
              label="Email "
              name="email"
              value={email}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Add User
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
