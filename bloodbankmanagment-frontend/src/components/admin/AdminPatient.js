import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
const AdminPatient = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/adminPatient")
        .then((res) => res.json())
        .then((data) => {
          setTableData(data);
        })
        .catch((err) => console.log("error"));
    };
    fetchData();
  }, []);

  const onRemove = (e, id) => {
    e.preventDefault();

    fetch("http://localhost:3001/updatePatientUsers", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("error"));
  };

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        Patient Details
      </h2>
      <Wrap>
        <Table style={{ minWidth: "650px" }}>
          <TableHead style={{ color: "white" }}>
            <TableRow>
              <TableCell>
                <strong>PatientName</strong>
              </TableCell>
              <TableCell>
                <strong>Blood Group</strong>
              </TableCell>
              <TableCell>
                <strong>Disease</strong>
              </TableCell>
              <TableCell>
                <strong>Address</strong>
              </TableCell>
              <TableCell>
                <strong>Mobile</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.username}</TableCell>
              <TableCell>{data.bloodgroup}</TableCell>
              <TableCell>{data.disease}</TableCell>
              <TableCell>{data.address}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>
                <button onClick={(e) => onRemove(e, data.id)}>Remove</button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Wrap>
    </>
  );
};

export default AdminPatient;

const Wrap = styled.div`
  width: calc(100vw - 280px);
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(49, 10, 255, 0.35);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(49, 10, 255, 0.35);
  -moz-box-shadow: 10px 10px 5px 0px rgba(49, 10, 255, 0.35);
`;
