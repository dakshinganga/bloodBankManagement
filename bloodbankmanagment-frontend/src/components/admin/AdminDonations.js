import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";

const AdminDonations = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/adminBloodDonations")
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          const newData = data.filter((record) => {
            return record.status === "pending";
          });
          setTableData(newData);
          //   console.log(newData);
        });
    };
    fetchData();
  });

  const onApprove = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:3001/updateDonationRequests", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        status: "approved",
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("error"));
  };

  const onReject = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:3001/updateDonationRequests", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        status: "rejected",
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log("error"));
  };

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>Donations</h2>
      <Container>
        <Table style={{ minWidth: "650px" }}>
          <TableHead style={{ color: "white" }}>
            <TableRow>
              <TableCell>
                <strong>DonorName</strong>
              </TableCell>
              {/* for the image  */}
              <TableCell>
                <strong>Blood Group</strong>
              </TableCell>
              <TableCell>
                <strong>Disease</strong>
              </TableCell>
              <TableCell>
                <strong>Unit (ml)</strong>
              </TableCell>
              <TableCell>
                <strong>Request Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.bloodgroup}</TableCell>
              <TableCell>{data.disease}</TableCell>
              <TableCell>{data.quantity}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>
                <button
                  style={{ marginRight: "4px" }}
                  onClick={(e) => onApprove(e, data.id)}
                >
                  Approve
                </button>
                <button onClick={(e) => onReject(e, data.id)}>Reject</button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default AdminDonations;

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
