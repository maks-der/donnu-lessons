import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { Note } from "./schemas";

const app = express();

async function connectToMongo() {
    await mongoose.connect('mongodb://root:secret@localhost:27017/lessons?authSource=admin')
    console.log('Connected to MongoDB');
}

app.use(bodyParser.json());

app.get('/notes', async (req: Request, res: Response) => {
    const result = await Note.find();
    res.send(result);
});

app.post('/notes',async (req: Request, res: Response) => {
    const newNote = new Note(req.body);
    const result = await Note.create(newNote);
    res.send(result);
});

app.listen(9000, () => {
    console.log('Server started');
    connectToMongo();
})