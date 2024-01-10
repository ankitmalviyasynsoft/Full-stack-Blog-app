import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  title: String,
  status: Boolean
});

const Category = mongoose.model('category', categorySchema);



export default Category;
