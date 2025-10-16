import express from 'express';
import auth from '../../middleware/auth.js'
import pokemonController from '../../controller/pokemon/pokemonController.js';

const routerPokemon = express.Router();

routerPokemon.post('/pokemon', auth, pokemonController.createPokemon);

routerPokemon.get('/pokemon/:id', auth, pokemonController.getPokemon);

routerPokemon.get('/pokemons', auth, pokemonController.getPokemons);

routerPokemon.delete("/pokemon/:id", auth, pokemonController.destroy);

routerPokemon.patch("/pokemon/:id", auth, pokemonController.update);

export default routerPokemon;