import mongoose from 'mongoose';

const bannersSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  bannerImageUrl: String,
  status: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

const Banners = mongoose.model('Banners', bannersSchema);



export default Banners;
