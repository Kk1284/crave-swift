import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kritikkalra77:E6vNS294rU5@cluster0.ah3s0.mongodb.net/food-del').then(() =>console.log("DB Connected"));
}