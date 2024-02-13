
import Banners from '../../models/banners/banners.js';



// create banners 
export const createBanners = async (req, res) => {
  try {
    const { title, content, author, userId, bannerImageUrl } = req.body;

    const isTitleAvaiable = await Banners.find({ title: title });
    if (!!isTitleAvaiable.length) return res.status(404).json({ message: 'Category already exist' });

    // Update old entries with status true to false
    await Banners.updateMany({ status: true }, { $set: { status: false } });


    const newBanner = new Banners({ title, status: true, content, author, bannerImageUrl, userId });
    await newBanner.save();


    res.status(201).json({ message: 'Banner created successfully', data: newBanner });
  } catch (error) {
    console.error('Error in creating Category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// update banners
export const updateBanners = async (req, res) => {
  try {
    const bannerId = req.params.id;
    const { title, content, author, bannerImageUrl, status } = req.body;

    // Find the existing banner by ID
    const existingBanner = await Banners.findById(bannerId);

    // Check if the banner exists
    if (!existingBanner) {
      return res.status(404).json({ message: 'Banner not found' });
    }

    // If the status is true, update all other banners to false
    if (status === true) {
      await Banners.updateMany({ status: true, _id: { $ne: bannerId } }, { $set: { status: false } });
    }

    // Update the banner fields
    const updatedBanner = await Banners.findByIdAndUpdate(
      bannerId,
      { title, content, author, bannerImageUrl, status },
      { new: true } // Return the updated post
    );

    res.status(200).json({ message: 'Banner updated successfully', data: updatedBanner });
  } catch (error) {
    console.error('Error in updating Banner:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get all posts with pagination
export const getAllBanners = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default to 1
    const perPage = parseInt(req.query.perPage) || 100; // Number of posts per page, default to 10

    const totalBanners = await Banners.countDocuments();
    const totalPages = Math.ceil(totalBanners / perPage);

    // Skip records to implement pagination
    const skip = (page - 1) * perPage;

    const getBanners = await Banners.find().skip(skip).limit(perPage).exec();

    res.status(200).json({
      page,
      perPage,
      totalPages,
      totalBanners,
      data: getBanners,
    });
  } catch (error) {
    console.error('Error in fetching banners:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Get banner is true
export const getBannerIsTrue = async (req, res) => {
  try {
    const banners = await Banners.findOne({ status: true }).exec();
    res.status(200).json({ data: banners });
  } catch (error) {
    console.error('Error in fetching banners:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

