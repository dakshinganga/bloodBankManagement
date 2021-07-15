import React, { useState } from "react";
import styled from "styled-components";
import AdminDashBoard from "./AdminDashBoard";

const AdminLogin = ({ adminUser, setIsAdmin, isAdmin }) => {
  //The input that the admin types on the login page
  const [admin, setAdmin] = useState({
    adminUserName: "",
    adminPassword: "",
  });

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAdmin({ ...admin, [name]: value });
  };

  //the function below will take the input fields to the backend for further processing and checks
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/adminLogin", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: admin.adminUserName,
        password: admin.adminPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        data.loggedIn ? setIsAdmin(true) : setIsAdmin(false);
      })
      .catch((err) => setIsAdmin(false));
    // if (
    //   adminUser.adminUserName === admin.adminUserName &&
    //   adminUser.adminPassword === admin.adminPassword
    // ) {
    //   setIsAdmin(!isAdmin);
    // }
  };

  return !isAdmin ? (
    <Container>
      <FormContainer>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <label htmlFor="userName">Username</label> <br />
          <input
            name="adminUserName"
            autoComplete="off"
            required
            id="userName"
            type="text"
            placeholder="Enter Username"
            value={admin.adminUserName}
            onChange={(e) => onChangeInput(e)}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            name="adminPassword"
            autoComplete="off"
            required
            id="password"
            type="password"
            placeholder="Enter Password"
            value={admin.adminPassword}
            onChange={(e) => onChangeInput(e)}
          />
          <br />
          <button>Login</button>
        </form>
      </FormContainer>
    </Container>
  ) : (
    <AdminDashBoard />
  );
};

export default AdminLogin;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`;

const FormContainer = styled.div`
  border-radius: 10px;
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
