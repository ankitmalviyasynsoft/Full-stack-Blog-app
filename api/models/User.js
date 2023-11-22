import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: String,
  mobile: Number,
  profile: String,
  role: String,
});

const User = mongoose.model('User', userSchema);

export default User;
