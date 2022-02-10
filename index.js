import express from 'express';
import { initClient, findAll } from './database.js';

const PORT = 4000;
const DB_URI = "mongodb://localhost:27017";

const app = express();
initClient(DB_URI);



app.listen(PORT, () => {
    console.log('Server startet');
})