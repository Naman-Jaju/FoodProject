require('dotenv').config({
    path: './env'
});
const LoginDetails = require("../models/user.login.js")
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");



const posts = [
    {
        username: 'Akshat',
        title: 'new'
    },
    {
        username: 'naman',
        title: 'New2'
    },
    {
        username: 'AJay',
        title: 'old'
    },
]

router.get("/", authenticateToken, (req, res, next) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

let secret_key = "akshat23223432"
let secret_key2 = "naman232323243"
router.post("/", (req, res) => {

    const username = req.body.username
    const user = { name: username }
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user);
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
})
router.post("/token", (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) res.sendStatus(401)
    if (!refreshToken.includes(refreshTokens)) return res.sendStatus(403);

    jwt.verify(refreshToken, secret_key2, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, secret_key, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next();
    })
}

function generateAccessToken(user) {
    return jwt.sign(user, secret_key, { expiresIn: '30s' })
}
function generateRefreshToken(user) {
    return jwt.sign(user, secret_key2)
}

module.exports = router;