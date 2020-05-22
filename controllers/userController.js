const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../config/keys");
// const passport = require("passport");
const validateRegisterInput = require("../validation/register");
const axios = require("axios");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
    register: function (req, res) {
        const { errors, isValid } = validateRegisterInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        console.log(true);
        db.User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json("Success"))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    },
}
