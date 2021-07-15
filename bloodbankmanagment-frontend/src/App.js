import "./App.css";
import styled from "styled-components";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import AdminLogin from "./components/admin/AdminLogin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DonorLogin from "./components/donor/DonorLogin";
import PatientLogin from "./components/patient/PatientLogin";
import { useState } from "react";
import OrganDonation from "./components/organDonation/OrganDonation";
// import AdminDashBoard from "./components/admin/AdminDashBoard";

function App() {
  const adminUser = {
    adminUserName: "admin",
    adminPassword: "admin",
  };

  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Container>
      <BrowserRouter>
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin">
            <AdminLogin
              adminUser={adminUser}
              setIsAdmin={setIsAdmin}
              isAdmin={isAdmin}
            />
          </Route>
          <Route exact path="/donor">
            <DonorLogin />
          </Route>
          <Route exact path="/patient">
            <PatientLogin />
          </Route>
          <Route exact path="/organDonation">
            <OrganDonation />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div``;
