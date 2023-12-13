import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe