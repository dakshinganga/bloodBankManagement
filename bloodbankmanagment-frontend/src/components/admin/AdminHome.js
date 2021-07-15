import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MessageIcon from "@material-ui/icons/Message";
import PeopleIcon from "@material-ui/icons/People";
import CheckIcon from "@material-ui/icons/Check";
import OpacityIcon from "@material-ui/icons/Opacity";
import GeneralStats from "./GeneralStats";
import BloodStats from "./BloodStats";

const AdminHome = () => {
  return (
    <Container>
      <UpperRight>
        <BloodStats />
      </UpperRight>
      <BottomRight>
        <GeneralStats Icon={PeopleIcon} title="Total Donors" stat={3} />
        <GeneralStats Icon={MessageIcon} title="Total Requests" stat={3} />
        <GeneralStats Icon={CheckIcon} title="Approved Requests" stat={4} />
        <GeneralStats
          Icon={OpacityIcon}
          title="Total Blood Unit(in ml)"
          stat={98}
        />
      </BottomRight>
    </Container>
  );
};

export default AdminHome;

const Container = styled.div`
  width: 100%;
`;

const UpperRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
`;

const BottomRight = styled.div`
  display: flex;
  padding-top: 120px;
  margin-top: 50px;
  border-top: 2px solid black;
`;
