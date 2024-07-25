
import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://vermasaksham69:Rocketman5555@cluster0.5zjptgg.mongodb.net/'!, {
      dbName: "codepaint",
    });
    console.log("connection established!");
  } catch (error) {
    console.log("error connecting to database");
  }
};
