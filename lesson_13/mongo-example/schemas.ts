import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    text: String
});
export const Note = mongoose.model('Note', noteSchema);