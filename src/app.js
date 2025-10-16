import express from 'express';
import routerPokemon from './routers/pokemon/pokemon.js';
import routerUser from './routers/user/user.js';


const app = express();

app.use(express.json());
app.use(routerPokemon);
app.use(routerUser)

export default app;