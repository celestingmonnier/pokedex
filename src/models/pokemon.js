export class Pokemon {
    //Propriété d'un pokemon
    id;
    nom;
    taille;
    image;
    types;
    talent;
    stats;
    poids;

    constructor(anId, aName, aHeight, aTypes) {
        //Contructeur de la classe pokemon
        this.id = anId
        this.name = aName
        this.taille = aHeight
        this.types = aTypes
    }
}