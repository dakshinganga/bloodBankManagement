import React, { useState } from "react";
import styled from "styled-components";

const OrganDonation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <Container>
      {!submitted ? (
        <FormContainer>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <label htmlFor="name">Name</label> <br />
            <input
              name="name"
              autoComplete="off"
              required
              id="name"
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => onChangeInput(e)}
            />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              name="email"
              autoComplete="off"
              required
              id="email"
              type="text"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => onChangeInput(e)}
            />
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      ) : (
        <h1>Thanks for the response.</h1>
      )}
    </Container>
  );
};

export default OrganDonation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`;

const FormContainer = styled.div`
  border-radius: 10px;
  border: 2px solid grey;
  min-height: 200px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    font-size: 30px;
  }
  button {
    font-size: 20px;
    margin: 10px 0;
    background-color: #cacaf1;
    border: none;
    border-radius: 5px;
    transition: all 250ms;
    :active {
      background-color: #2166bb;
    }
  }

  input {
    border-radius: 24px;
    border: 1px solid #dfe1e5;
    outline: none;
    height: 40px;
    padding-left: 10px;
  }
`;
