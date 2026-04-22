import mongoose from "mongoose";

const connectDb=async()=>{
  try{
    const mongoUri = process.env.MONGO_DB;

    if (!mongoUri) {
      throw new Error("MONGO_DB is not defined in the environment variables");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to the database successfully");
  }catch(error){
    console.error("Failed to connect to the database", error);
  } 
}
export default connectDb;
