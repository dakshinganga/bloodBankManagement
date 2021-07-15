import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const AdminRequests = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchRecords = () => {
      fetch("http://localhost:3001/adminBloodRequests")
        .then((res) => res.json())
        .then((data) => {
          const newData = data.filter((record) => {
            return record.status === "pending";
          });
          // console.log(newData);
          setTableData(newData);
        })
        .catch((err) => console.log("error"));
    };
    fetchRecords();
  }, []);

  //left here
  const onApprove = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:3001/updateBloodRequests", {
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
      .catch((err) => console.log(err));
  };

  //left here
  const onReject = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:3001/updateBloodRequests", {
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
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        Blood Requested
      </h2>
      <Container>
        <Table style={{ minWidth: "650px" }}>
          <TableHead style={{ color: "white" }}>
            <TableRow>
              <TableCell>
                <strong>PatientName</strong>
              </TableCell>
              {/* for the image  */}
              <TableCell>
                <strong>Age</strong>
              </TableCell>
              <TableCell>
                <strong>Reason</strong>
              </TableCell>
              <TableCell>
                <strong>Blood Group</strong>
              </TableCell>
              <TableCell>
                <strong>Unit (in ml)</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
              <TableCell>
                <strong>Address</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
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
                <TableCell>{data.address}</TableCell>
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
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default AdminRequests;

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
