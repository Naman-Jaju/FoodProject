const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv");

dotenv.config({
    path: '../env',
});

const main = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/MainProj');
        console.log("connected to db");
        app.on("errror", (error) => {
            console.log("ERR", error);
            throw error;
        })
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = main