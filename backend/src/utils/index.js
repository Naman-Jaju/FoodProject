const express = require("express");
const app = express();
const cors = require('cors');
const main = require("../db/index.js");
const LoginDetails = require("../models/user.login.js");
const signuproute = require("../routes/signup.route.js")
const loginroute = require("../routes/login.route.js")
const dotenv = require("dotenv");
require('dotenv').config({
    path: '../../.env'
});

app.use(express.json());
app.use(cors());

main()
    .then(() => {
        let abc = process.env.PORT || 3000
        app.listen(abc, () => {
            console.log(`port is now open on ${abc}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

app.use(express.urlencoded({ extended: true }));

app.use("/users", signuproute);
app.use("/login", loginroute);