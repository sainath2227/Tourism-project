import React from "react";
import imgw from "./Images/beach.jpg";
import { Button, Stack } from "@mui/material";
import img5 from './Images/palace.jpg';
import img4 from './Images/Hampi.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Visit = () => {
  const [isLoggedIn6, setIsLoggedIn6] = useState(false);
  const navigate6 = useNavigate();

  const handleLogin6 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn6(true);

    // Navigate to the desired route
    navigate6("/AddUser"); // Example: Navigate to the Admin page after login
  };
  
  const [isLoggedIn7, setIsLoggedIn7] = useState(false);
  const navigate7 = useNavigate();

  const handleLogin7 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn7(true);

    // Navigate to the desired route
    navigate7("/AddUser"); // Example: Navigate to the Admin page after login
  };
  const [isLoggedIn8, setIsLoggedIn8] = useState(false);
  const navigate8= useNavigate();

  const handleLogin8 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn8(true);

    // Navigate to the desired route
    navigate8("/AddUser"); // Example: Navigate to the Admin page after login
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>
          The Journey of a  Thousand miles <br /> Begins With a{" "}
          Single Step
        </h1>
      </div>
      <Stack direction="row" spacing={2} padding={10}>
        <div>
          <img src={imgw} alt="" height={280} width={350} />
          <h4>Gokarna Beach</h4>
          <p>
            Gokarna Beach is mainly used by Indian Pilgrims.Main Beach is a long
            open Beach ,Known for surfing.Half moon and Paradise are beyond Om
            Beach and are accessible only by trekking or boat.
          </p>
          <Button variant="contained" onClick={handleLogin8}>Book Now</Button>
        </div>
        <div>
          <img src={img5} alt="" height={280} width={350} />
          <h4>Mysore Palace</h4>
          <p>
            The city is also known as the city of palaces .Mysore has always enchanted its visitors with its quaint charm.Mysore has a warm and cool climate throughout the year.It has a salubrious climate.
          </p>
          <Button variant="contained" onClick={handleLogin7}>Book Now</Button>
        </div>
        <div>
          <img src={img4} alt="" height={280} width={350} />
          <h4>Hampi</h4>
          <p>
           Hampi is a cultural and architectural heritage site built more than 200 years ago.The site was constructed between 1336 AD to 1565 AD.This location is famous for its temples,palaces,market streets and monuments ,making up the vijayanagara Empire.
          </p>
          <Button variant="contained" onClick={handleLogin6}>Book Now</Button>
        </div>
      </Stack>
    </>
  );
};

export default Visit;
