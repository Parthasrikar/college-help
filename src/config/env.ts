import dotenv from 'dotenv';

dotenv.config();

const reqiuredEnvVars = ['PORT', 'MONGO_URI'];

reqiuredEnvVars.forEach((key)=> {
    if(!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
})

export const env = {
    port : Number(process.env.PORT),
    mongoURI : process.env.MONGO_URI as string, 
}