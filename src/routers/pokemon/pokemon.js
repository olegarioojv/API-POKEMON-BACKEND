import express from 'express';
import pokemonController from '../../controller/pokemon/pokemonController.js';

const routerPokemon = express.Router();

routerPokemon.post('/pokemon', pokemonController.createPokemon);

routerPokemon.get('/pokemon/:id', pokemonController.getPokemon);

routerPokemon.get('/pokemons', pokemonController.getPokemons);

export default routerPokemon;