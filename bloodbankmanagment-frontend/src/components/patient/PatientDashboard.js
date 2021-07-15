import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PatientHome from "./PatientHome";
import PatientNav from "./PatientNav";
import MakeRequest from "./MakeRequest";
import RequestHistory from "./RequestHistory";

const PatientDashboard = ({ patient }) => {
  return (
    <BrowserRouter>
      <Container>
        <LeftContainer>
          <PatientNav />
        </LeftContainer>
        <RightContainer>
          <Switch>
            <Route path="/patient/Home">
              <PatientHome />
            </Route>
            <Route path="/patient/makeRequest">
              <MakeRequest />
            </Route>
            <Route path="/patient/requestHistory">
              <RequestHistory patient={patient} />
            </Route>
          </Switch>
        </RightContainer>
      </Container>
    </BrowserRouter>
  );
};

export default PatientDashboard;

const Container = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  background-color: #003366;
  height: calc(100vh - 70px);
  padding-left: 5px;
  flex: 0.25;
  min-width: 200px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;
  padding-left: 40px;
  padding-right: 40px;
`;
