import React, { useState } from "react";
import styled from "styled-components";

const MakeRequest = () => {
  //defined the state for storing the data provided by the user,
  // in a controlled way
  const [donationData, setDonationData] = useState({
    patientName: "",
    patientAge: "",
    reason: "",
    bloodGroup: "",
    unit: "",
    address: "",
  });
  //the below method runs whenever the inputs gets changed
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDonationData({ ...donationData, [name]: value });
  };

  // On the Form submit this method runs to send the data
  // to the backend
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/bloodRequests", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        date: `${new Date().toDateString()} ${new Date()
          .toTimeString()
          .slice(0, 8)}`,
        quantity: donationData.unit,
        name: donationData.patientName,
        whom: "patient",
        reason: donationData.reason,
        age: donationData.patientAge,
        address: donationData.address,
        status: "pending",
        bloodGroup: donationData.bloodGroup,
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
            address: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
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
              <label htmlFor="">Current Address</label>
              <input
                type="text"
                name="address"
                value={donationData.address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <br />

            <button type="submit">Request</button>
          </form>
        </Main>
      </Wrap>
    </>
  );
};
export default MakeRequest;

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
