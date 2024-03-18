import mongoose from "mongoose";


let isConnected = false;


export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
  
    if(isConnected) {
      console.log('MongoDB is already connected');
      return;
    }

    const mongoDbUrl = process.env.MONGO_DB_URL;
if (!mongoDbUrl) {
    console.error('MONGO_DB_URL environment variable is not provided');
    return; 
}

  
    try {
        await mongoose.connect(mongoDbUrl);
  
      isConnected = true;
      console.log('MongoDB connected')
    } catch (error) {
      console.log("error is -" + error);
    }
  }