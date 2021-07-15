import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
const RequestHistory = ({ patient }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/adminBloodRequests")
        .then((res) => res.json())
        .then((data) => {
          const newData = data.filter((record) => {
            return record.name === patient;
          });
          setTableData(newData);
        })
        .catch((err) => console.log("error"));
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        My Request History
      </h2>
      <Container>
        <Table style={{ minWidth: "650px" }}>
          <TableHead style={{ color: "white" }}>
            <TableRow>
              <TableCell>
                <strong>Patient Name</strong>
              </TableCell>
              <TableCell>
                <strong>Patient Age</strong>
              </TableCell>
              <TableCell>
                <strong>Reason</strong>
              </TableCell>
              <TableCell>
                <strong>Blood Group</strong>
              </TableCell>
              <TableCell>
                <strong>Unit</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.reason}</TableCell>
                <TableCell>{data.bloodgroup}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};
export default RequestHistory;

const Container = styled.div`
  width: calc(100vw - 280px);
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(10, 255, 94, 0.35);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(10, 255, 94, 0.35);
  -moz-box-shadow: 10px 10px 5px 0px rgba(10, 255, 94, 0.35);
`;
