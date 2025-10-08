import express from 'express';
import getOne from '../../services/pokemon/getPokemon.js';
import create from '../../services/pokemon/createPokemon.js';

const routerPokemon = express.Router()

const getPokemon = async (req, res) => {
    try {
        const id = req.params.id;

        if(!id) {
            res.status(400);
            res.json({
                message: "ID é obrigatório",
            });
            return;
        }

        const pokemon = await getOne(id)

        if(!pokemon) {
            res.status(404)
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
        req.json({
            message: "Ocorreu um erro",
        });
    }
};

    const getPokemons = async (req, res) => {
        res.json({
            message: "Pokemons All"
        })
    }

    const createPokemon = async (req, res) => {
        try {
            const {name, nature, tipo, sexo, level} = req.body

            if(!name || !nature || !tipo || !sexo || !level) {
                res.status(400)
                res.json({
                    message: "Nome, Nature, Tipo, Sexo e Level do pokemon são obrigatórios"
                })
                return
            }

            const createPokemon = await create(req.body)

            if(!createPokemon){
                res.status(400).json({
                    message: "Erro ao criar o pokemon"
                })
                return
            }

            res.status(201).json({
                data: createPokemon
            })

        } catch (error) {
            res.status(500)
            req.json({
                message: "Ocorreu um erro"
            })
        }
    }

    export default {
        getPokemon,
        getPokemons,
        createPokemon
    }