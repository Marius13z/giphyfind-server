import mongoose from 'mongoose'

const search = mongoose.Schema({
    searchTerm: String,
    userId: String,
    username: String,
})

export default mongoose.model("SearchModel", search)