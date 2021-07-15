import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DonorNav from "./DonorNav";
import DonationHistory from "./DonationHistory";
import DonorHome from "./DonorHome";
import DonateBlood from "./DonateBlood";
import RequestHistory from "./RequestHistory";
import RequestBlood from "./RequestBlood";

const DonorDashboard = ({ donor }) => {
  return (
    <BrowserRouter>
      <Container>
        <LeftContainer>
          <DonorNav />
        </LeftContainer>
        <RightContainer>
          <Switch>
            <Route path="/donor/Home">
              <DonorHome />
            </Route>
            <Route path="/donor/donateBlood">
              <DonateBlood donor={donor} />
            </Route>
            <Route path="/donor/donationHistory">
              <DonationHistory donor={donor} />
            </Route>
            <Route path="/donor/requestBlood">
              <RequestBlood donor={donor} />
            </Route>
            <Route path="/donor/requestHistory">
              <RequestHistory donor={donor} />
            </Route>
          </Switch>
        </RightContainer>
      </Container>
    </BrowserRouter>
  );
};

export default DonorDashboard;

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
