import mongoose from "mongoose";

const gifSchema = mongoose.Schema({
    title: String,
    userId: String,
    image: String,
})

export default mongoose.model("GifModel", gifSchema);