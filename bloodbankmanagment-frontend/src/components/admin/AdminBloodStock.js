import React, { useState } from "react";
import styled from "styled-components";

const AdminBloodStock = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const action = e.target.name;
    fetch("http://localhost:3001/updateBloodStock", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        type: type.toLowerCase(),
        quantity: amount,
        action: action,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAmount("");
        setType("");
      })
      .catch((err) => console.log("error"));
  };

  return (
    <Wrap>
      <h2>Update Blood Unit</h2>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div>
          <label htmlFor="bloodType">Enter Blood Type</label>
          <input
            type="text"
            id="bloodType"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="unit">Amount of Blood (ml)</label>
          <input
            type="text"
            id="unit"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
      <button type="submit" name="add" onClick={(e) => onFormSubmit(e)}>
        Add
      </button>
      <button type="submit" name="subtract" onClick={(e) => onFormSubmit(e)}>
        Subtract
      </button>
    </Wrap>
  );
};

export default AdminBloodStock;

const Wrap = styled.div`
  width: calc(100vw - 280px);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  margin-top: 50px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  input {
    width: 80px;
    margin-left: 5px;
  }

  div {
    margin: 10px 0;
  }
`;
