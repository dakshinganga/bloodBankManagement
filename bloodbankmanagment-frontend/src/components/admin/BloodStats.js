import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OpacityIcon from "@material-ui/icons/Opacity";

const BloodStats = () => {
  const [bloodData, setBloodData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/getBloodData")
        .then((res) => res.json())
        .then((data) => {
          setBloodData(data);
        })
        .catch((err) => console.log("error"));
    };
    fetchData();
  }, []);

  return (
    <>
      {bloodData.map((data) => {
        return (
          <Wrap>
            <FirstRow>
              <h2 style={{ fontWeight: "300" }}>{data.bloodtype}</h2>
              <OpacityIcon style={{ color: "red" }} fontSize="large" />
            </FirstRow>
            <SecondRow>{data.quantity}</SecondRow>
          </Wrap>
        );
      })}
    </>
  );
};

export default BloodStats;

const Wrap = styled.div`
  display: flex;
  border: 2px solid black;
  width: 150px;
  justify-content: end;
  flex-direction: column;
  padding: 4px;
  margin: 10px;
  background-color: white;
  min-height: 100px;
  min-width: 250px;
`;

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const SecondRow = styled.div`
  padding-left: 3px;
  font-weight: 800;
  font-size: 25px;
`;
