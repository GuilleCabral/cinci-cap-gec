

const router = require('express').Router();
const users = require('../models/User');

const handleErrors = (err) => {
   console.log(err. message, err.code)
   let error = {email: '', password: ''};

   if(err.message.includes('user validation failed')) {
       console.log (Object.values(err))
   }
}

module.export.signup_get = (req, res) => {
   res.render('signup');

}
module.export.login_get = (req, res) => {
  //  res.render('login');
}

module.export.signup_post = async (req, res) => {
   const {email, password} = req.body;
   try{
       const user = await User.create({email, password});
       res.status(201).json(user);
   }
   catch(err){
       handleErrors(err);
       res.status(400).send("error, user wasn't created")
   }
}

module.export.login_post = async (req, res) => {
   const {email, password} = req.body;

   console.log(email,password)
   res.send('user login');
}
