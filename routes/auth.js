const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.use(express.json());
// const bcrypt = require('bcryptjs'); // not working 1 check 

const jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'akabakjdkadaks';

// Create a user using : POST "/api/auth/". 

// router.get('/', (req,res) => {
//     // obj = {
//     //     name : "Akshay",
//     //     num : 34
//     // }
//     // console.log(req.body);
//     // res.json(obj);

//     console.log(req.body);

//     const user = User(req.body);
//     user.save();

//     res.send("Hello !!");
// })


// router.post('/', (req,res) => {
//     // obj = {
//     //     name : "Akshay",
//     //     num : 34
//     // }
//     // console.log(req.body);
//     // res.json(obj);

//     console.log(req.body);

//     const user = User(req.body);
//     user.save();

//     res.send("Hello !!");
// })

// router.post('/', [
//     body('email' , "Enter a valid name").isEmail(),
//     body('name' , "Enter a valid Email" ).isLength({ min: 3 }),
//     body('password' , "Enter a valid password").isLength({ min: 5 }),

// ] , (req,res) => {
//     // obj = {
//     //     name : "Akshay",
//     //     num : 34
//     // }
//     // console.log(req.body);
//     // res.json(obj);

//     // console.log(req.body);

//     // const user = User(req.body);
//     // user.save();

//     // res.send("Hello !!");

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     User.create({
//       name: req.body.name,
//       email:req.body.email,
//       password: req.body.password,
//     }).then(user => res.json(user));

//     res.json({
//         error : "Please enter unique email !!",
//     })
// })


// Create a user using : POST "/api/auth/createUser". No login required 

router.post('/createuser', [
    body('email', "Enter a valid name").isEmail(),
    body('name', "Enter a valid Email").isLength({ min: 3 }),
    body('password', "Enter a valid password").isLength({ min: 5 }),

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // User.create({
    //   name: req.body.name,
    //   email:req.body.email,
    //   password: req.body.password,
    // }).then(user => res.json(user));

    // check whether the user with this email exists already 
    try {

        
        let user2 = await User.findOne({ email: req.body.email });
        if (user2) {
            return req.status(400), json({ error: "Sorry a user with email already exist " });
        }
        
        // const salt = await bcrypt.genSalt(10);
        // const secPass = await bcrypt.hash(req.body.password,salt);
        
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        //   .then(user => res.json(user));      

        // res.json({
        //     error : "Please enter unique email !!",
        // })

        const data = {
            id : user.id
        }

        const authtoken = jwt.sign(data,JWT_SECRET);
        // console.log(jwtData);
        res.json({authtoken});

        // res.send("Hello World !!");
    } catch (error) {
        console.log(error.message);
        // res.status(500).send("Some error occured !!");
    }


})



// Authenticate a user using : POST "/api/auth/login". No login required 

router.post('/login', [
    body('email', "Enter a valid name").isEmail(),
    body('password', "Password cannot be empty").exists(),

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({error : " 1 Please try to login with correct Credentails"});
        }

        // const passwordCompare = bcrypt.compare(password,user.password);
        // if (!passwordCompare) {
        //     return res.status(400).json({error : "Please try to login with correct Credentails"});
        // }

        // if ( password !== user.password) { // worng 
        
        if (password.localeCompare(user.password) !== 0) {
            return res.status(400).json({error : "Please try to login with correct Credentails"});
        }


        // const payload = {
        //     user : {
        //         id : user.id
        //     }
        // }
        
        const data = {
            id : user.id
        }

        const authtoken = jwt.sign(data,JWT_SECRET);
        // console.log(jwtData);
        res.json({authtoken});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server occured !!");
    }

})



// // Route 3 : 
// // Get loggedin user details : POST "/api/auth/getuser". Login required 

// router.get('/getuser/:id', fetchuser , async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const userId = req.params.id;
//         const user = await User.findById(userId).select("-password");
//         res.send(user);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send("Internal server occured !!");
//     }

// })

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.get('/getuser', fetchuser,  async (req, res) => {
    
    // const token=req.headers['auth-token'];
    // const unencrypt=jwt.decode(token)

    // console.log(unencrypt)

    try {
      console.log(req.userId);
      userId = req.userId;
      const user = await User.findById(userId).select("-password");
      console.log(user);
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

//   module.exports = router
module.exports = router