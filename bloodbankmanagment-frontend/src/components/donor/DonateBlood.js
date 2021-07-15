import React, { useState } from "react";
import styled from "styled-components";

const DonateBlood = ({ donor }) => {
  const [donationData, setDonationData] = useState({
    bloodGroup: "",
    unit: "",
    disease: "",
    age: "",
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
    fetch("http://localhost:3001/bloodDonations", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        date: new Date().toDateString(),
        bloodGroup: donationData.bloodGroup,
        quantity: donationData.unit,
        age: donationData.age,
        whom: "donor",
        disease: donationData.disease,
        name: donor,
        phone: donationData.phone,
        address: donationData.address,
        status: "pending",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.donated) {
          setDonationData({
            bloodGroup: "",
            unit: "",
            disease: "",
            age: "",
            phone: "",
            address: "",
          });
        }
      })
      .catch((err) => console.log("error"));
  };

  return (
    <Wrap>
      <Heading>
        <h2>DonateBlood</h2>
      </Heading>
      <Main>
        <form onSubmit={(e) => onFormSubmit(e)}>
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
            <label htmlFor="">Unit (ml)</label>

            <input
              type="number"
              name="unit"
              value={donationData.unit}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <div>
            <label htmlFor="">Disease</label>
            <input
              type="text"
              name="disease"
              value={donationData.disease}
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
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={donationData.address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              value={donationData.age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />

          <button onClick={(e) => onFormSubmit(e)} type="submit">
            Donate
          </button>
        </form>
      </Main>
    </Wrap>
  );
};
export default DonateBlood;

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
