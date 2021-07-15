import React, { useState } from "react";
import styled from "styled-components";

const RequestBlood = () => {
  const [donationData, setDonationData] = useState({
    patientName: "",
    patientAge: "",
    reason: "",
    bloodGroup: "",
    unit: "",
    phone: "",
    address: "",
  });

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDonationData({ ...donationData, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/bloodRequests", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: donationData.patientName,
        age: donationData.patientAge,
        reason: donationData.reason,
        bloodGroup: donationData.bloodGroup,
        quantity: donationData.unit,
        phone: donationData.phone,
        address: donationData.address,
        whom: "Donor",
        date: `${new Date().toDateString()} ${new Date()
          .toTimeString()
          .slice(0, 8)}`,
        status: "pending",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.requested) {
          setDonationData({
            patientName: "",
            patientAge: "",
            reason: "",
            bloodGroup: "",
            unit: "",
            phone: "",
            address: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrap>
      <Heading>
        <h2>Request Blood</h2>
      </Heading>
      <Main>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <div>
            <label htmlFor="">Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={donationData.patientName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <div>
            <label htmlFor="">Patient Age</label>

            <input
              type="number"
              name="patientAge"
              value={donationData.patientAge}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <div>
            <label htmlFor="">Description</label>
            <input
              type="text"
              name="reason"
              value={donationData.reason}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <div>
            <label htmlFor="">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={donationData.bloodGroup}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <div>
            <label htmlFor="">Unit (in ml)</label>
            <input
              type="number"
              name="unit"
              value={donationData.unit}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Phone</label>
            <input
              type="number"
              name="phone"
              value={donationData.phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Current Address</label>
            <input
              type="text"
              name="address"
              value={donationData.address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <button onSubmit={(e) => onFormSubmit(e)}>Request</button>
        </form>
      </Main>
    </Wrap>
  );
};
export default RequestBlood;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 280px);
  align-items: center;
  border: 2px solid black;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 100%;
  border-radius: 10px;
`;

const Heading = styled.div`
  padding: 20px 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */
  justify-content: space-between;
  border: 1px solid gray;
  padding: 40px;

  input {
    width: 150px;
    margin-left: 5px;
    border-radius: 10px;
    outline: none;
    border: none;
    padding-left: 10px;
  }
`;
