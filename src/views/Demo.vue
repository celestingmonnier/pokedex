<template>
  <div class="demo">
    <h1>Pokedex</h1>
    <div id="container">
        <div class="card" v-for="(p, index) in pokemons" v-bind:key="index">
                <router-link v-bind:to="'/pokemondetails/'+p.id">
                  <h2 class="name">{{ p.name }}</h2>
                  <img class="iconCard" v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+p.id+'.png'">
                </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { PokemonService } from '@/services/pokemonService.js'
export default {

  name: 'Demo',

 

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
  mounted(){
    //cette fonction sera appele lorsque le composant est pret a l'emploi
    this.service.getPokemons()
    .then (pokemons => {
      this.pokemons = pokemons
    })
  },
  
}
</script>

<style scoped>

.card:hover {
	animation: bounce-top 0.9s both;
}

@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}

.demo {
  background: #f2f2f2;
  padding: 50px;
}

#container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 25px;
    flex-wrap: wrap;
}
.card{
    flex-grow: 1;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
}

.card a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.card h2 {
  text-align: center;
}
.name{
    color: crimson;
}
.tags{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
}
.oneTag{
    background-color: crimson;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
</style>