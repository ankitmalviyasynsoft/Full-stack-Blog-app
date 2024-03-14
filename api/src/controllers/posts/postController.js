
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



// Get all posts with pagination
export const getRecentPost = async (req, res) => {
  try {
    const numberOfRecentPosts = 3; // You can adjust this value based on your needs

    const recentPosts = await Post.find()
      .sort({ createdAt: -1 }) // Sort posts by createdAt date in descending order
      .limit(numberOfRecentPosts)
      .exec();

    res.status(200).json({ recentPosts });
  } catch (error) {
    console.error('Error in fetching recent posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get a single post by ID
export const getPostViewCount = async (req, res) => {
  try {
    const posts = await Post.find().sort('-postViewCount').exec();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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



// Delete post by ID
export const deletePostById = async (req, res) => {
  try {
    const postId = req.params.id; // Assuming the post ID is passed as a route parameter

    // Delete the post by ID
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error in deleting post:', error);
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


// update View Count Post a post by ID
export const updateViewCountPost = async (req, res) => {
  let postId = req.params.id
  try {

    // Find the post by ID
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Find the post by ID and update postViewCount
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $inc: { postViewCount: 1 } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (!updatedPost) {
      return res.status(201).json({ error: 'Post not found' });
    }

    return res.json({ message: 'Post view count incremented successfully' });
  } catch (error) {
    console.error('Error in updating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Post Search Function 
export const searchPostByTitleAndContent = async (req, res) => {
  const { query, page = 1, perPage = 10 } = req.query;

  try {
    const skip = (page - 1) * perPage;
    console.log(skip)
    const results = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
      ],
    })
      .skip(skip)
      .limit(Number(perPage))
      .exec();

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get Similar Posts By Category Title  Function 
export const getSimilarPostsByCategoryTitle = async (req, res) => {
  const { categoryTitles } = req.query;
  const { page = 1, limit = 6 } = req.query;

  try {
    const categoryTitleArray = categoryTitles.split(',');
    console.log(categoryTitleArray)
    const pipeline = [
      {
        $lookup: {
          from: 'categories',
          localField: 'categories',
          foreignField: 'title',
          as: 'matchedCategories',
        },
      },
      {
        $match: {
          'categories.title': { $in: categoryTitleArray },
        },
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $limit: parseInt(limit),
      },
      {
        $project: {
          title: 1,
          content: 1,
          profileURL: 1,
          categories: 1,
          postViewCount: 1,
          userId: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ];

    const result = await Post.aggregate(pipeline);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};















