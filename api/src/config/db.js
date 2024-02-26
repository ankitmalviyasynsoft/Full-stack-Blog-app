import mongoose from 'mongoose';

export async function connectToDatabase() {
  try {
    await mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error: ', error);
  }
}