import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: String,
  country: String,
  state: String,
  city: String,
  address: String,
  mobile: Number,
  profile: String,
  dob: String,
  role: [String],
});

const User = mongoose.model('User', userSchema);

export default User;
