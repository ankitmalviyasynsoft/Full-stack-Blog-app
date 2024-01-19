
import Post from '../../models/posts/Post.js';


// create post 
export const createPost = async (req, res) => {
  try {
    const { title, content, profileURL, categories, userId } = req.body;

    // Create a new post
    const newPost = new Post({ title, content, profileURL, categories, userId });

    // Save the post to the database
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error in creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get all posts with pagination
export const getAllPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default to 1
    const perPage = parseInt(req.query.perPage) || 10; // Number of posts per page, default to 10

    const totalPosts = await Post.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    // Skip records to implement pagination
    const skip = (page - 1) * perPage;

    const posts = await Post.find().skip(skip).limit(perPage).exec();

    res.status(200).json({ page, perPage, totalPages, totalPosts, posts });
  } catch (error) {
    console.error('Error in fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get a single post by ID
export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id; // Assuming the post ID is passed as a route parameter

    // Find the post by ID
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'success', data: post });
  } catch (error) {
    console.error('Error in fetching post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Update a post by ID
export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, profileURL, categories } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, profileURL, categories },
      { new: true } // Return the updated post
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    console.error('Error in updating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
