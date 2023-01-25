import dotenv from 'dotenv';

// Load env variables
dotenv.config();

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USERNAME = process.env.DB_USERNAME || 'admin';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'admin';
export const DB_NAME = process.env.DB_NAME || 'eggs-inc';
export const PORT = process.env.PORT || 3000;
