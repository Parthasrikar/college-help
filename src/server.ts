import app from './app';
import { env } from './config/env';
import { connectToDb } from './config/database';

const startServer = async(): Promise<void> => {
    await connectToDb();

    app.listen(env.port, ()=> {
        console.log(`Server is running on port ${env.port}`);
    })
}

startServer();