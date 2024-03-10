const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },

    refreshToken: {
        type: String,
    },
},
    {
        timestamps: true,
    },
)

loginSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        tel: this.tel
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};
loginSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
};

const LoginDetails = new mongoose.model("LoginDetails", loginSchema);
module.exports = LoginDetails;