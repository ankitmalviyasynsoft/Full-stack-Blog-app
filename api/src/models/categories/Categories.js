import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  title: String,
  status: Boolean
}, { timestamps: true });

const Category = mongoose.model('category', categorySchema);



export default Category;
