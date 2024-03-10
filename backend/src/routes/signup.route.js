const SignUpDetails = require("../models/user.signup.js")
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");



router.get("/", async (req, res) => {
    const userlist = await SignUpDetails.find().select("-password");

    if (!userlist) {
        res.status(500).send("No Data Found")
    }
    res.send(userlist);
})

router.get("/:id", async (req, res) => {
    let { id } = req.params;
    const user = await (await SignUpDetails.findById(id).select("-password"));
    if (!user) {
        res.status(500).send("no user found");
    }
    res.send(user);
})

router.post("/signup", async (req, res) => {
    try {
        const data = req.body.formData
        let user = new SignUpDetails({
            username: data.username,
            fullname: data.fullname,
            phone: data.phone,
            password: data.password,
            email: data.email,
            city: data.city,
            zip: data.zip,
            country: data.country,
        })
        user = await user.save();
        console.log(user);
        res.json(200);
    } catch (err) {
        res.json(401);
    }

})
module.exports = router;