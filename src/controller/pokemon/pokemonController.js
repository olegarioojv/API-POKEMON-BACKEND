import express from 'express';
import getOne from '../../services/pokemon/getPokemon.js';
import create from '../../services/pokemon/createPokemon.js';
import getAll from '../../services/pokemon/getPokemons.js';
import destroyPokemon from '../../services/pokemon/destroyPokemon.js';
import updatePokemon from '../../services/pokemon/updatePokemon.js';
import createPokebolas from '../../services/pokebolas/createPokebolas.js';

const routerPokemon = express.Router();

const getPokemon = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            res.status(400);
            res.json({
                message: "ID é obrigatório",
            });
            return;
        }

        const pokemon = await getOne(id);

        if (!pokemon) {
            res.status(404);
            res.json({
                message: "Pokemon não encontrado!!"
            });
            return;
        }

        res.json({
            data: pokemon
        });

    } catch (error) {
        res.status(500);
        res.json({
            message: "Ocorreu um erro",
        });
    }
};

const getPokemons = async (req, res) => {

    const pokemons = await getAll();

    res.status(200);
    res.json({
        data: pokemons
    });
};

const createPokemon = async (req, res) => {
    try {
        const { name, nature, tipo, sexo, level } = req.body;

        if (!name || !nature || !tipo || !sexo || !level) {
            res.status(400);
            res.json({
                message: "Nome, Nature, Tipo, Sexo e Level do pokemon são obrigatórios"
            });
            return;
        }

        const pokemon = await create(req.body);

        if (!pokemon) {
            res.status(500).json({ message: 'Erro ao criar pokemon' });
            return;
        }

        console.log("Olaaaa")

        let pokebolasCriadas;
        // expect body.pokebolas (array or single)
        if (req.body.pokebolas) {
             console.log("Olaaa 2222")
            pokebolasCriadas = await createPokebolas(req.body.pokebolas, pokemon.id);
        }

        res.status(201).json({
            data: pokemon,
            pokebolas: pokebolasCriadas
        });

    } catch (error) {
        res.status(500);
        res.json({
            message: "Ocorreu um erro"
        });
    }
};

const destroy = async (req, res) => {
    const id = req.params.id;

    const pokemon = await destroyPokemon(id);

    if (!pokemon) {
        res.status(400);
        res.json({
            message: "Não foi possível deletar o pokemon"
        });
        return;
    }

    res.status(200);
    res.json({
        message: "Pokemon deletado com sucesso",
        pokemon
    });
};

const update = async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    const pokemon = await updatePokemon(data, id);

    if (!pokemon) {
        res.status(400);
        res.json({
            message: "Não foi possível atualizar o pokemon"
        });
        return;
    }

    res.status(200);
    res.json({
        message: "Pokemon atualizado com sucesso",
        pokemon
    });
};

export default {
    getPokemon,
    getPokemons,
    createPokemon,
    destroy,
    update
};
