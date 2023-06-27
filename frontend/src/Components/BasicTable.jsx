import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container, Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const [users, setUsers] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8080/getUsers");
    setUsers(users.data);
    console.log(users.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/deleteUser/${id}`);
    loadUsers();
  };
  const [isLoggedIn31, setIsLoggedIn31] = useState(false);
  const navigate31 = useNavigate();

  const handleLogin31 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn31(true);

    // Navigate to the desired route
    navigate31("/Final"); // Example: Navigate to the Admin page after login
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"> ID</TableCell>
              <TableCell align="left"> Name</TableCell>
              <TableCell align="left">Mobile</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <a href={`/Update/${user.id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    {/* <a href={`/DeleteUser/${user.id}`}> */}
                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteUsers(user.id)}
                    >
                      Delete
                    </Button>
                    {/* </a> */}
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Stack>
          <Button
            variant="contained"
            display="Flex "
            flexdirection="column"
            alignitems="center"
            spacing={3}
            onClick={handleLogin31}
          >
            Confirm your Booking
          </Button>
        </Stack>
      </div>
    </Container>
  );
}
