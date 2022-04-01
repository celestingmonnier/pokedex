import axios from 'axios'
import { Pokemon } from '../models/pokemon';

export class PokemonService {
    constructor() {

    }
    getPokemon(id) {
        return new Promise((resolve, reject)=>{

            axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
            .then(response=> {
                //On stocke les données dans var pokemondata
                let pokemonData = response.data;
                let pokemon = new Pokemon()
                pokemon.nom = pokemonData.name
                pokemon.id = pokemonData.id
                pokemon.taille = pokemonData.height
                pokemon.image = pokemonData.sprites.other.dream_world.front_default
                pokemon.types = pokemonData.types
                pokemon.talent = pokemonData.abilities
                pokemon.stats = pokemonData.stats
                pokemon.poids = pokemonData.weight
                
                resolve(pokemon)
            })
            .catch(reason => {
                reject("Erreur lors de la récupération des pokemons : "+reason)
            })
        })
    }

    //Cette méthode retourne un tbaleau de pokemons
    getPokemons() {
        return new Promise((resolve, reject)=> {

            let pokemons = []

            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => {
                //Ce code est appelé lorsque le serveur nous renvoit les resultats
                let result = response.data.results;
                result.forEach(p => {
                    let substrings = p.url.split('/');
                    let id = substrings[substrings.length - 2];

                    p.id = id;

                    //Pour chaque pokémon trouvé dans 'result' on l'ajoute dans pokemons
                    pokemons.push(p)
                });
                //On resout la pormesse
                resolve(pokemons)
            })
            .catch(reason => {
                //Si l'appel API echoue en recolte la raison
                //Et on rejette la promesse
                reject("Erreur lors de la récupération des pokémons : "+reason)
            })
        })
    }
}