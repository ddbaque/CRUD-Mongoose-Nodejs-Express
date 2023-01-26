import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(MONGODB_URI);
    console.log("database connected to,", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
