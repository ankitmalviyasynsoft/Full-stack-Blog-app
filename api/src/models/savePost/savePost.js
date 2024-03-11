import mongoose, { Schema } from 'mongoose';


const savePostSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
}, { timestamps: true })

const SavePost = mongoose.model('SavePost', savePostSchema);



export default SavePost;
