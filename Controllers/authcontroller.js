var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('../models/user');
const express = require('express');
const bodyParser = require('body-parser');


var signup = (req, res) =>{
   console.log(req.body);
   let fullName = req.body.fullName;
   let email = req.body.email;
   let password = bcrypt.hashSync(req.body.password, 8);
   let role = req.body.role;
   let preferences = req.body.preferences;

   const user = new User({
    fullName: fullName,
    email: email,
    role: role,
    preferences: preferences,
    password: password
   });

   user.save().then((data) => {
    return res.status(200).send("Users registered successfully");

   }).catch((err) =>{
    return res.status(500).send("Users registration failed");;
    });
};

var signin = (req, res) =>{
    let email = req.body.email;
   let password = req.body.password;
   User.findOne({
      email: email
   }).then((user) =>{
     var passwordIsValid = bcrypt.compareSync(password, user.password);
     if(!passwordIsValid){
        return res.status(401).send({
            accessToken: null,
            message: "Invalid password"
        });
     }
     var token = jwt.sign({
        id: user.id
     },process.env.API_SECRET,{
        expiresIn:864000
     });
     return res.status(200).send({
        user: {
            user: user.id,
            email: user.email,
            fullName: user.fullName,
        },
        message: "LOgin Successful",
        accessToken: token
     });
   }).catch((err) => {
    if(err){
    return res.status(500).send({
        message: err
    });
}
   })
    
};


module.exports = {signin, signup};