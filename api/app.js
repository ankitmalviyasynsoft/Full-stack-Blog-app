import dotenv from 'dotenv';
import express from 'express';

// Import the database connection function
import { connectToDatabase } from './config/db.js';
import routes from './routes/index.js';


const app = express();
dotenv.config();

app.use(express.json());

// Connect to your MongoDB database Call the database connection function
connectToDatabase();


// Routes
app.use('/api/v1', routes);



export default app;
