
import Category from '../../models/categories/Categories.js';


// create Category 
export const createCategories = async (req, res) => {
  try {
    const { title } = req.body;

    // Create a new post
    const isTitleAvaiable = await Category.find({ title: title })

    if (!!isTitleAvaiable.length) return res.status(404).json({ message: 'Category already exist' });
    const newcategory = new Category({ title, status: false });

    // Save the post to the database
    await newcategory.save();

    res.status(201).json({ message: 'Category created successfully', category: newcategory });
  } catch (error) {
    console.error('Error in creating Category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get all posts with pagination
export const getAllCategories = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default to 1
    const perPage = parseInt(req.query.perPage) || 100; // Number of posts per page, default to 10

    const totalCategories = await Category.countDocuments();
    const totalPages = Math.ceil(totalCategories / perPage);

    // Skip records to implement pagination
    const skip = (page - 1) * perPage;

    const categories = await Category.find().skip(skip).limit(perPage).exec();

    res.status(200).json({
      page,
      perPage,
      totalPages,
      totalCategories,
      categories,
    });
  } catch (error) {
    console.error('Error in fetching Categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Update a post by ID
export const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, status } = req.body;
    const updateCategory = await Category.findByIdAndUpdate(id, { title, status },
      { new: true } // Return the updated Category
    );

    if (!updateCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category updated successfully', category: updateCategory });
  } catch (error) {
    console.error('Error in updating Category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



export const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Find the category by ID and delete it
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (deletedCategory) {
      res.status(200).json({ success: true, message: 'Category deleted successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Category not found.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error.' });
  }
}