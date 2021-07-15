import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AdminDonor = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/adminDonor")
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
    fetch("http://localhost:3001/updateDonorUsers", {
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
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>Donor Details</h2>
      <Container>
        <Table style={{ minWidth: "650px" }}>
          <TableHead style={{ color: "white" }}>
            <TableRow>
              <TableCell>
                <strong>DonorName</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
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
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.address}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>
                <button onClick={(e) => onRemove(e, data.id)}>Remove</button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default AdminDonor;

const Container = styled.div`
  width: calc(100vw - 280px);
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(207, 39, 39, 0.35);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(207, 39, 39, 0.35);
  -moz-box-shadow: 10px 10px 5px 0px rgba(207, 39, 39, 0.35);
`;
