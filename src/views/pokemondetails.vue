<template>
    <div class="pokemondetails">

        <div id="container">
            <div id="zonePrincipale">
                <div id="image">
                    <img id="imgPokemon" @click="playScream" v-bind:src="'https://www.pokebip.com/pokedex-images/300/'+pokemon.id+'.png'">
                    <div id="types">
                        <h2>Types :</h2>
                        <span><img class="typeTag" v-for="(p, index) in getColor" v-bind:key="index" v-bind:src="p"></span>
                    </div>
                </div>
                <div id="infos">
                    <h1>{{pokemon.nom}}</h1>
                    <p id="id">#{{pokemon.id}}</p>
                    <div id="caracteristiques">
                        <div class="taille">
                            <h2>Taille :</h2>
                            <p>{{pokemon.taille*10}} cm</p>
                        </div>
                        <div id="poids">
                            <h2>Poids :</h2>
                            <p>{{pokemon.poids/10}} Kg</p>
                        </div>
                        <audio style="display:none" ref="audio" v-bind:src="'https://www.pokebip.com/audio/cris-sl/'+pokemon.id+'.mp3'" controls></audio>
                    </div>
                </div>
                
            </div>
        </div>
        //Hello
        <div id="stats">
                <h2>Statistiques</h2>
                <div id="containerStats">
                    <div class="statCard">
                        <h3>PV</h3>
                        <div class="statBar">
                            <div id="aStatBar" v-bind:style="getPvWidth"></div>
                            {{pokemon.stats[0].base_stat}}
                        </div>
                    </div>
                    <div class="statCard">
                        <h3>Vitesse</h3>
                        <div class="statBar">
                            <div id="aStatBar" v-bind:style="getSpeedWidth"></div>
                            {{pokemon.stats[5].base_stat}}
                        </div>
                    </div>
                    <div class="statCard">
                        <h3>Attaque</h3>
                        <div class="statBar">
                            <div id="aStatBar" v-bind:style="getAttackWidth"></div>
                            {{pokemon.stats[1].base_stat}}
                        </div>
                    </div>
                    <div class="statCard">
                        <h3>Défense</h3>
                        <div class="statBar">
                            <div id="aStatBar" v-bind:style="getDefenseWidth"></div>
                            {{pokemon.stats[2].base_stat}}
                        </div>
                    </div>
                    <div class="statCard">
                        <h3>Attaque spéciale</h3>
                        <div class="statBar">
                            <div id="aStatBar" v-bind:style="getAttackSpeWidth"></div>
                            {{pokemon.stats[3].base_stat}}
                        </div>
                    </div>
                    <div class="statCard">
                        <h3>Défense spéciale</h3>
                        <div class="statBar">
                            <div id="aStatBar" v-bind:style="getDefenseSpeWidth"></div>
                            {{pokemon.stats[4].base_stat}}
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
</template>
<style scoped>
    #container{
        display: flex;
        justify-content: center;
    }

    #zonePrincipale {
        display: flex;
    }

    #infos{
        margin: 50px;
    }

    #evolution {
        display: none;
        max-width: 1fr;
        background: #f2f2f2;
        border-radius: 15px;
        padding: 25px;
    }

    #containerStats {
       display: flex;
       justify-content: center;
    }

    .statCard {
        border-radius: 10px;
        background: #f2f2f2;
        min-width: 100px;
        margin: 10px;
        padding: 10px;
    }

    .statBar{
        display: flex;
        height: 16px;
        width: 100px ;
        background: #ffffff;
        border-radius: 8px;
    }

    #aStatBar{
        margin-right: 4px;
        height: 16px;
        background: crimson;
        border-radius: 8px;
    }
    
    h2 {
        color: crimson;
    }

    #imgPokemon {
        width: 500px;
    }

    .typeTag {
        display: inline;
        max-height: 40px;
        margin: 0 10px;
    }

</style>
<script>
import { PokemonService } from '@/services/pokemonService.js'
export default {
    name: 'pokemonDetails',


    data() {
        return{
            pokemon: {},
            service: new PokemonService()
        }
    },

    computed: {
        //Affiche couleur selon le type
        getColor(){
            let colors = []
            if (this.pokemon.types != undefined){
                //on recupere couleur correspondant a chaque type
                this.pokemon.types.forEach(t => {
                    switch (t.type.name){
                    case 'normal':
                            colors.push('/type/normal.svg')
                            break;
                    case 'fighting':
                            colors.push('/type/comabt.svg')
                            break;
                    case 'flying':
                            colors.push('/type/vol.svg')
                            break;
                    case 'poison':
                            colors.push('/type/poison.svg')
                            break;
                    case 'ground':
                            colors.push('/type/sol.svg')
                            break;
                    case 'rock':
                            colors.push('/type/roche.svg')
                            break;
                    case 'bug':
                            colors.push('/type/insecte.svg')
                            break;
                    case 'ghost':
                            colors.push('/type/spectre.svg')
                            break;
                    case 'steel':
                            colors.push('/type/acier.svg')
                            break;
                    case 'fire':
                            colors.push('/type/feu.svg')
                            break;
                    case 'water':
                            colors.push('/type/eau.svg')
                            break;
                    case 'grass':
                            colors.push('/type/plante.svg')
                            break;
                    case 'electric':
                            colors.push('/type/eletrik.svg')
                            break;
                    case 'psychic':
                            colors.push('/type/psy.svg')
                            break;
                    case 'ice':
                            colors.push('/type/glace.svg')
                            break;
                    case 'dragon':
                            colors.push('/type/dragon.svg')
                            break;
                    case 'dark':
                            colors.push('/type/obscur.svg')
                            break;
                    case 'fairy':
                            colors.push('/type/fee.svg')
                            break;
                    case 'unknown':
                            colors.push('/type/inconnu.svg')
                            break;
                    case 'shadow':
                            colors.push('/type/tenebres.svg')
                            break;
                    default:
                        break;
                    }
                })
                return colors
            }
            return ''
        },
        getPvWidth () {
            return "width:" + (this.pokemon.stats[0].base_stat/350)*100 + "%"
        },
        getSpeedWidth () {
            return "width:" + (this.pokemon.stats[5].base_stat/200)*100 + "%"
        },
        getAttackWidth () {
            return "width:" + (this.pokemon.stats[1].base_stat/200)*100 + "%"
        },
        getDefenseWidth () {
            return "width:" + (this.pokemon.stats[2].base_stat/250)*100 + "%"
        },
        getAttackSpeWidth () {
            return "width:" + (this.pokemon.stats[3].base_stat/200)*100 + "%"
        },
        getDefenseSpeWidth () {
            return "width:" + (this.pokemon.stats[4].base_stat/250)*100 + "%"
        }
    },
    mounted(){
        let route = this.$route
        this.pokemonId = route.params.id
        this.service.getPokemon(this.pokemonId)
        .then(pokemon => {this.pokemon = pokemon})
    },
    methods:{
        playScream () {
            this.$refs.audio.play()
        }
    }
}
</script>