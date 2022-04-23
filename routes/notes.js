const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const User = require('../models/User');

// Route 1 : Get all the notes  
router.get('/fetchallnotes', fetchuser, async (req, res) => {

  try {
    console.log(req.userId);
    const userId = req.userId;
    const user = await User.findById(userId).select("-password");

    console.log(user);

    

    const allnotes = await Notes.find({ name: user.name });

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


// Route 2 : Add a new note using POST "/api/auth/addnote".  Login required 
router.post('/addnote', fetchuser, 
// [
//   body('title', "Enter a valid title >= length 3").isLength({ min: 3 }),
//   body('description', "Enter a valid Description >= length 5").isLength({ min: 5 }),
// ] , 
async (req, res) => {

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    console.log(req.body);

    const { title, description, tag } = req.body;

    const note = new Notes({
      title, description, tag, user: req.userId
    })
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})


// Route 3 : Update note using POST "/api/auth/addnote".  Login required 
router.post('/addnote', fetchuser, async (req, res) => {

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    console.log(req.body);

    const { title, description, tag } = req.body;

    // const newNote = new Notes({
    //   title, description, tag, user: req.userId
    // })
    const newNote = {};
    if (title) { newNote.title = title; }
    if (description) { newNote.description = description; }
    if (tag) { newNote.tag = tag; }
    
    // find the node to be updated and update it 
    const note = newNote.findByIdAndUpdate();
    

    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})



module.exports = router