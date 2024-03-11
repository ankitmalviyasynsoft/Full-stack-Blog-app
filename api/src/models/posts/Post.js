import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  profileURL: { type: String, required: true },
  categories: { type: Array, required: true },
  postViewCount: { type: Number, required: true, default: 0 },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);



export default Post;
