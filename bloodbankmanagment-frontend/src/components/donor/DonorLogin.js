import React, { useState } from "react";
import styled from "styled-components";
import DonorDashboard from "./DonorDashboard";

const DonorLogin = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDonor, setIsDonor] = useState(false);
  const [registerDetails, setRegisterDetails] = useState({
    donorUserName: "",
    donorEmail: "",
    donorPassword: "",
    donorAddress: "",
    donorPhone: "",
  });
  const [donorLoginDetails, setDonorLoginDetails] = useState({
    donorUserName: "",
    donorPassword: "",
  });

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (!isRegistered) {
      setRegisterDetails({ ...registerDetails, [name]: value });
    } else {
      setDonorLoginDetails({ ...donorLoginDetails, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/donorRegister", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: registerDetails.donorEmail,
        userName: registerDetails.donorUserName,
        password: registerDetails.donorPassword,
        phone: registerDetails.donorPhone,
        address: registerDetails.donorAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.registered) {
          setIsRegistered(true);
        }
      })
      .catch((err) => setIsRegistered(false));

    setRegisterDetails({
      donorUserName: "",
      donorEmail: "",
      donorPassword: "",
      donorAddress: "",
      donorPhone: "",
    });
  };

  const loginButton = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/donorLogin", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: donorLoginDetails.donorUserName,
        password: donorLoginDetails.donorPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.loggedIn ? setIsDonor(true) : setIsDonor(false);
      })
      .catch((err) => setIsDonor(false));
  };

  return !isDonor ? (
    <Container>
      <FormContainer>
        <form onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="userName">Username</label> <br />
          <input
            name="donorUserName"
            autoComplete="off"
            required
            id="userName"
            type="text"
            placeholder="Enter Username"
            value={
              registerDetails.donorUserName || donorLoginDetails.donorUserName
            }
            onChange={(e) => onChangeInput(e)}
          />
          <br />
          {!isRegistered ? (
            <>
              <div>
                <label htmlFor="userEmail">Email</label>
                <br />
                <input
                  name="donorEmail"
                  autoComplete="off"
                  required
                  id="userEmail"
                  type="text"
                  placeholder="Enter Email"
                  value={registerDetails.donorEmail}
                  onChange={(e) => onChangeInput(e)}
                />
                <br />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  name="donorPhone"
                  autoComplete="off"
                  required
                  id="phone"
                  type="text"
                  placeholder="Enter phone"
                  value={registerDetails.donorPhone}
                  onChange={(e) => onChangeInput(e)}
                />
                <br />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <br />
                <input
                  name="donorAddress"
                  autoComplete="off"
                  required
                  id="address"
                  type="text"
                  placeholder="Enter address"
                  value={registerDetails.donorAddress}
                  onChange={(e) => onChangeInput(e)}
                />
                <br />
              </div>
            </>
          ) : (
            ""
          )}
          <label htmlFor="password">Password</label> <br />
          <input
            name="donorPassword"
            autoComplete="off"
            required
            id="password"
            type="password"
            placeholder="Enter Password"
            value={
              registerDetails.donorPassword || donorLoginDetails.donorPassword
            }
            onChange={(e) => onChangeInput(e)}
          />
          <br />
          {!isRegistered ? (
            <div>
              <button type="submit" onClick={(e) => onSubmit(e)}>
                Register
              </button>
              <br />
              <SwitchLoginRegister>
                If Already Registered, then
                <span onClick={() => setIsRegistered(true)}> Login</span>
              </SwitchLoginRegister>
            </div>
          ) : (
            <button onClick={(e) => loginButton(e)}>Login</button>
          )}
        </form>
      </FormContainer>
    </Container>
  ) : (
    <DonorDashboard donor={donorLoginDetails.donorUserName} />
  );
};

export default DonorLogin;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`;

const FormContainer = styled.div`
  border-radius: 10px;
  padding-top: 10px;
  border: 2px solid grey;
  min-height: 400px;
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

const SwitchLoginRegister = styled.p`
  span {
    color: blue;
    font-weight: 800;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
  }
  span:active {
    color: #f5f5f5;
    background: black;
  }
`;
