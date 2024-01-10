


// Upload Files 
export const uploadFiles = async (req, res) => {
  try {
    const image = req.file;
    const fullUrl = `${req.protocol}://${req.get('host')}/uploads/${image.filename}`;

    res.status(201).json({ message: 'Image created successfully', imageUrl: fullUrl });
  } catch (error) {
    console.error('Error in creating post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
