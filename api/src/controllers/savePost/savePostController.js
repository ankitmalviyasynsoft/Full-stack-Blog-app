
import SavePost from '../../models/savePost/savePost.js';


// create post 
export const savePostByUser = async (req, res) => {
  try {

    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error('Error in creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

