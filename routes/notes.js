const express = require('express');
const { cloneElement } = require('react');
const router =express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const User = require('../models/User');

// Route 1 : Get all the notes  
router.get('/fetchallnotes', fetchuser , async (req,res) => {

    
    try {
        console.log(req.userId);
        userId = req.userId;
        const user = await User.findById(userId).select("-password");
        
        console.log(user);

        const allnotes = await Notes.find({name : user.name});

        console.log(allnotes);
        
        res.send(allnotes);

        // res.send(user)
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }

    // obj = {
    //     name : "Akshay",
    //     num : 34
    // }
    // res.json(obj);
})

module.exports = router