import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


const uploadOnCloudinary = async (localFilePath) => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        if (!localFilePath) return null
        const fileBuffer = localFilePath.file.buffer;

        // Upload the file to Cloudinary
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({ resource_type: 'auto' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result.secure_url);
                }
            );
            uploadStream.end(fileBuffer);
        });

    } catch (error) {
        return null;
    }
}



export { uploadOnCloudinary }





//   //upload the file on cloudinary
//   const response = await cloudinary.uploader.upload(localFilePath, {
//     resource_type: "auto"
// })
// // file has been uploaded successfull
// console.log("file is uploaded on cloudinary ", response.url);