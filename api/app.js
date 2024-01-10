import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Import the database connection function
import { connectToDatabase } from './config/db.js';
import routes from './routes/index.js';


const app = express();
dotenv.config();

app.use(express.json());

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to your MongoDB database Call the database connection function
connectToDatabase();

// Routes
app.use('/api/v1', routes);



export default app;
