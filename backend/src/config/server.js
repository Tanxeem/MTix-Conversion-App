import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const DB_URL = process.env.DB_URL;

export const BACKEND_URL = process.env.BACKEND_URL;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;

export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;


export const MAILTRAP_SMPT_HOST = process.env.MAILTRAP_SMPT_HOST;
export const MAILTRAP_SMPT_PORT = process.env.MAILTRAP_SMPT_PORT;
export const MAILTRAP_SMPT_USER = process.env.MAILTRAP_SMPT_USER;
export const MAILTRAP_SMPT_PASS = process.env.MAILTRAP_SMPT_PASS;