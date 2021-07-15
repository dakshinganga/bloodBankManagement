import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
const DonationHistory = ({ donor }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log(donor);
    const fetchData = () => {
      fetch("http://localhost:3001/adminBloodDonations")
        .then((res) => res.json())
        .then((data) => {
          const newData = data.filter((record) => {
            return record.name === donor;
          });
          setTableData(newData);
          //   console.log(newData);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        My Donation History
      </h2>
      <Container>
        <Table style={{ minWidth: "650px" }}>
          <TableHead style={{ color: "white" }}>
            <TableRow>
              <TableCell>
                <strong>Donor Age</strong>
              </TableCell>
              {/* for the image  */}
              <TableCell>
                <strong>Disease</strong>
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
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.disease}</TableCell>
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
export default DonationHistory;

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
