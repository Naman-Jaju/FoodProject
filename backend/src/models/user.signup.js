const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const SignUpSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
        default: '',
    },
    zip: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: "INDIA",
        uppercase: true
    },
    refreshToken: {
        type: String,
    },

},
    {
        timestamps: true,
    }
)

SignUpSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        let hashedpassword = await bcrypt.hash(this.password, salt);
        this.password = hashedpassword;
        next();
    }
    catch (error) {
        next(error);
    }
})

SignUpSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

SignUpSchema.methods.generateAccessToken = function () {
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
SignUpSchema.methods.generateRefreshToken = function () {
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
const SignUpDetails = new mongoose.model("SignUpDetails", SignUpSchema);
module.exports = SignUpDetails;