import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secondpage from "./Components/Secondpage";
import Firstpage from "./Components/Firstpage";
import Signup from "./Components/Signup";
import Visit from "./Components/Visit";
import AddUser from "./Components/AddUser";
import BasicTable from "./Components/BasicTable";
import Update from "./Components/Update";
import Final from "./Components/Final";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Secondpage />} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Secondpage" element={<Secondpage />} />
        <Route path="/Firstpage" element={<Firstpage />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/BasicTable" element={<BasicTable />} />
        <Route path="/Update/:id" element={<Update />} />
        <Route path="/Final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
