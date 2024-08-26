const express = require('express');
const router = express.Router()
const User = require('../models/userModel');
const { jwtAuthMiddleware, generateToken } = require('../jwt')

// Define your user-related routes here
router.get('', (req, res) => {
  res.send('User endpoint');
});


//post route to add a user
router.post('/signup', async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data); //craete a new User document using Mongoose model
    const response = await newUser.save();// Save the new User to the database  
    const payload = {
      id: response.id
    }
    const token = generateToken(payload);
    res.status(200).json({ response: response, token: token });
  }
  catch (error) {
    console.log(error)
  }
});

//Login route
router.post('/login', async (req, res) => {
  try {
    //Extract username and password from request body
    const { email, password } = req.body;
    //find the user by email
    const user = await User.findOne({ email: email });

    // if user does not exist and password not match , return error
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    //generate token 
    const payload = {
      id: user.id
    }

    const token = generateToken(payload);
    console.log('Token', token)

    res.status(200).json({ message: 'Login Successfully.', token: token });

  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/user', async (req, res) => {
  try {
    const user = await User.find();
    console.log(user, 'user-----------------')
    res.status(200).json({ message: 'All user list.', response: user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})


router.delete('/user/:userID', async (req, res) => {
  try {
    const userId = req.params.userID;
    const response = await User.findOneAndDelete(userId);

    if (!response) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ response: response, message: 'User Deleted Successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.get('/user/:userID', async (req, res) => {
  try {
    const userId = req.params.userID;
    const user = await User.findOneAndUpdate(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json(user); // Directly return the user object
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;