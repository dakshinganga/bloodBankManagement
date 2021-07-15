const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "daksh",
    password: "Qwerty@321",
    database: "bloodbankmanagement",
  },
});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  db.select()
    .table("adminusers")
    .then((users) => res.json(users))
    .catch((err) => res.json("error"));
});

app.post("/adminLogin", (req, res) => {
  const { userName, password } = req.body;
  db.select("username", "password")
    .from("adminusers")
    .where("username", "=", userName)
    .then((data) => {
      data[0].password === password
        ? res.json({ loggedIn: true })
        : res.status(400).json({ loggedIn: false });
    })
    .catch((err) => res.status(400).json({ loggedIn: false }));
});

app.post("/donorRegister", (req, res) => {
  const { userName, email, password, phone, address } = req.body;
  // console.log(req.body);

  db("donorusers")
    .returning("*")
    .insert({
      username: userName,
      email: email,
      password: password,
      address: address,
      phone: phone,
    })
    .then((user) => {
      res.json({ registered: true });
    })
    .catch((err) => res.json(err));
  // .catch((err) => res.status(400).json({ registered: false }));
});

app.post("/donorLogin", (req, res) => {
  const { userName, password } = req.body;
  db.select("username", "password")
    .from("donorusers")
    .where("username", "=", userName)
    .then((data) => {
      data[0].password === password
        ? res.json({ loggedIn: true })
        : res.status(400).json({ loggedIn: false });
    })
    .catch((err) => res.status(400).json({ loggedIn: false }));
});

app.post("/patientRegister", (req, res) => {
  const { userName, email, password, bloodGroup, phone, address, disease } =
    req.body;

  db("patientusers")
    .insert({
      username: userName,
      email: email,
      password: password,
      bloodgroup: bloodGroup,
      phone: phone,
      address: address,
      disease: disease,
    })
    .then((user) => {
      res.json({ registered: true });
    })
    .catch((err) => {
      res.status(400).json({ registered: false });
    });
});

app.post("/patientLogin", (req, res) => {
  const { userName, password } = req.body;
  db.select("username", "password")
    .from("patientusers")
    .where("username", "=", userName)
    .then((data) => {
      data[0].password === password
        ? res.json({ loggedIn: true })
        : res.status(400).json({ loggedIn: false });
    })
    .catch((err) => res.status(400).json({ loggedIn: false }));
});

app.post("/bloodRequests", (req, res) => {
  const {
    date,
    bloodGroup,
    quantity,
    name,
    whom,
    reason,
    age,
    address,
    status,
  } = req.body;

  db("bloodrequests")
    .returning("*")
    .insert({
      date: date,
      bloodgroup: bloodGroup,
      quantity: quantity,
      name: name,
      whom: whom,
      reason: reason,
      age: age,
      address: address,
      status: status,
    })
    .then((data) => res.json({ requested: true }))
    .catch((err) => res.status(400).json({ requested: true }));
});

app.post("/bloodDonations", (req, res) => {
  const {
    date,
    bloodGroup,
    quantity,
    age,
    whom,
    disease,
    name,
    phone,
    address,
    status,
  } = req.body;
  // console.log(req.body);

  db("blooddonations")
    .returning("*")
    .insert({
      date: date,
      bloodgroup: bloodGroup,
      quantity: quantity,
      age: age,
      whom: whom,
      disease: disease,
      name: name,
      phone: phone,
      address: address,
      status: status,
    })
    .then((data) => {
      // console.log(data);
      res.json({ donated: true });
    })
    .catch((err) => res.status(400).json({ donated: false }));
});

// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//   // Store hash in your password DB.
// });

app.get("/adminBloodRequests", (req, res) => {
  db.select()
    .table("bloodrequests")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json("error"));
});

app.get("/adminBloodDonations", (req, res) => {
  db.select()
    .table("blooddonations")
    .then((data) => {
      // console.log(data);
      res.json(data);
    })
    .catch((err) => res.json("error"));
});

app.put("/updateBloodRequests", (req, res) => {
  const { id, status } = req.body;
  db("bloodrequests")
    .where("id", "=", id)
    .update({
      status: status,
    })
    .then((data) => res.json(data))
    .catch((err) => res.json("unable to do changes"));
});

app.put("/updateDonorUsers", (req, res) => {
  const { id } = req.body;
  db("donorusers")
    .where("id", id)
    .del()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("error"));
});

app.put("/updatePatientUsers", (req, res) => {
  const { id } = req.body;
  db("patientusers")
    .where("id", id)
    .del()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("unable to take request"));
});

app.put("/updateDonationRequests", (req, res) => {
  const { id, status } = req.body;

  db("blooddonations")
    .where("id", "=", id)
    .update({
      status: status,
    })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("unable to take request"));
});

app.get("/adminDonor", (req, res) => {
  db.select()
    .table("donorusers")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

app.get("/adminPatient", (req, res) => {
  db.select()
    .table("patientusers")
    .then((data) => res.json(data))
    .catch((err) => res.json(400).json("error"));
});

app.put("/updateBloodStock", (req, res) => {
  const { type, quantity, action } = req.body;
  if (action === "add") {
    db("bloodstock")
      .where("bloodtype", "=", type)
      .increment({
        quantity: quantity,
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  } else {
    db("bloodstock")
      .where("bloodtype", "=", type)
      .decrement({
        quantity: quantity,
      })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  }
});

app.get("/getBloodData", (req, res) => {
  db.select()
    .table("bloodstock")
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("error"));
});

app.listen(3001, () => {
  console.log("app is running on port 3001");
});
