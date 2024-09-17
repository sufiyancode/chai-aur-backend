// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     console.log();
//   } catch (error) {
//     console.log("MONGODB connection error", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Concatenate the MongoDB URI and database name
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
