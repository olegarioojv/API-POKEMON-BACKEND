import express from 'express';
import pokemon from './routers/pokemon/pokemon.js';

const app = express();

app.use(express.json());
app.use(pokemon);

export default app;