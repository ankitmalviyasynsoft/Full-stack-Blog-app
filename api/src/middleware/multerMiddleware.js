import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/temp")
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// })


const storage = multer.memoryStorage(); // Use memory storage for Multer


export const upload = multer({
  storage,
})