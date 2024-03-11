
import mongoose from 'mongoose';
import SavePost from '../../models/savePost/savePost.js';


// create post 
export const savePostByUser = async (req, res) => {
  try {
    const { userId, postId } = req.body;

    // Validate input data (you might want to add more validation logic)
    if (!userId || !postId) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    // Check if a post with the given postId already exists
    const existingSavePost = await SavePost.findOne({ postId });

    if (existingSavePost) {
      return res.status(400).json({ message: 'Post with the given ID already saved' });
    }

    // Create a new SavePost instance
    const savePost = new SavePost({
      userId,
      postId,
    });

    // Save the post
    await savePost.save();

    res.status(201).json({ message: 'Post saved successfully' });
  } catch (error) {
    console.error('Error in creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



export const getAllSavedPostsByUser = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);

    const savedPosts = await SavePost.aggregate([
      {
        $match: {
          userId: userId,
        },
      },
      {
        $lookup: {
          from: 'posts',  // the name of the Post model collection
          localField: 'postId',
          foreignField: '_id',
          as: 'savedPosts',
        },
      },
      {
        $unwind: '$savedPosts',
      },
      {
        $project: {
          _id: '$savedPosts._id',
          title: '$savedPosts.title',
          content: '$savedPosts.content',
          profileURL: '$savedPosts.profileURL',
          categories: '$savedPosts.categories',
          postViewCount: '$savedPosts.postViewCount',
          userId: '$savedPosts.userId',
          createdAt: '$savedPosts.createdAt',
          updatedAt: '$savedPosts.updatedAt',
        },
      },
    ]);

    res.status(200).json({ data: savedPosts });
  } catch (error) {
    console.error('Error in getting saved posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};