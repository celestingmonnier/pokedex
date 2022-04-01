<template>
  <div class="blindTest">
    <h1>Who's that Pokemon ?</h1>

    <p>test :{{pokemons[14]}}</p>

    <p>Score :</p>
    {{chooseFourPokemons}}

    <img id="imgPokemon" v-bind:src="'https://www.pokebip.com/pokedex-images/300/'+'.png'">

    <div id="reponses">
        <span id="reponse1"></span>
        <span id="reponse2"></span>
        <span id="reponse3"></span>
        <span id="reponse4"></span>
    </div>
  </div>
</template>

<script>
import { PokemonService } from '@/services/pokemonService.js'
export default {

  name: 'blindtest',

 

  data(){
    return{
      pokemons: [],
      service: new PokemonService()
    }
  },
  methods: {
      
  },

  created(){
    console.log('created')
  },
  computed: {
      chooseFourPokemons() {
          let pokemons = [];

          for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 151);
            pokemons.push(pokemons[randomNumber]);
            }
            console.log(pokemons);
        return pokemons
      },
  },
  mounted(){
    //cette fonction sera appele lorsque le composant est pret a l'emploi
    this.service.getPokemons()
    .then (pokemons => {
      this.pokemons = pokemons
    })
  },
  
}
</script>
