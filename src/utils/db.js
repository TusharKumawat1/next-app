import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://tusharkumawat9694:tushar111@tushar.ut33evd.mongodb.net/");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;