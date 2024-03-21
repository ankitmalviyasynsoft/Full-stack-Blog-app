import User from '../../models/users/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



// Register (signup) logic
export const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // // Check if the email is already registered
    // const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   return res.status(400).json({ message: 'Email is already in use' });
    // }

    // // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // // Create a new user
    // const newUser = new User({ username, email, password: hashedPassword, role });
    // await newUser.save();

    // const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {

    console.error('Error in user registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// update user 
export const updateUser = async (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>')
  try {
    const { _id, ...updatedUserData } = req.body;

    // Find the user by ID and update the data
    const updatedUser = await User.findByIdAndUpdate(_id, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Modify the response structure to exclude the password field
    const userObject = updatedUser.toObject();
    delete userObject.password;

    // Send the updated user as a response
    res.json({ message: 'success', data: userObject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Login logic
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password)
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create and send a JWT token for authentication
    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.status(200).json({ token });

  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// User by token logic
export const getUserByToken = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    if (!user) return res.status(404).send('User not found.');

    const userObject = user.toObject();
    delete userObject.password;

    res.json({ message: 'success', data: userObject });
    res.status(200);
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


//  get All Users
export const getAllUsers = async (req, res) => {
  try {
    console.log(req)
    const users = await User.find();

    // Modify the response structure to exclude the password field
    const modifiedUsers = users.map(user => {
      const userObject = user.toObject();
      delete userObject.password; // Remove the password field
      return userObject;
    });

    res.json({ message: 'success', data: modifiedUsers });

    res.status(200);
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



