import mongoose from 'mongoose';
import { env } from './env';

export const connectToDb = async():Promise<void> => {
    try {
        await mongoose.connect(env.mongoURI)
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}