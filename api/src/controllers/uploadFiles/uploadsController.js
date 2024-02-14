import { uploadOnCloudinary } from "../../utils/cloudinary.js";



// Upload Files 
export const uploadFiles = async (req, res) => {
  try {

    const imageUrl = await uploadOnCloudinary(req)
    res.status(201).json({ message: 'Image created successfully', imageUrl });

  } catch (error) {
    console.error('Error in creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

};
