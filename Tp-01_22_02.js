// *** Personnages ***


class Personnage{
    constructor(pseudo, classe, sante, attaque, niveau=1){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;

     
    }
       // *** Methodes ***
    evoluer(){
        this.niveau ++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }
    
    verifierSante(){
        if(this.sante<=0){
            this.sante=0
            console.log(this.pseudo + " a perdu !");
        }            
    }
    get informations(){
        console.log(this.pseudo + ", " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau);
    }
}

class Magicien extends Personnage{
    constructor(pseudo, classe, sante,attaque){
        super(pseudo, "Magicien", 170, 90);
    }
    attaque(adversaire){
        adversaire.sante-=helmet.attaque
        console.log(this.pseudo + " attaque" + adversaire.pseudo + " en lançant un sort et fait" + attaque);
        helmet.evoluer();
        adversaire.verifierSante();
    }

    mageInfo(){
        console.log(this.pseudo + ", " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau);
    }
}

class Guerrier extends Personnage{
    constructor(pseudo, classe, sante, attaque){
        super(pseudo,"Guerrier", 350, 50);
    }
    attaque(adversaire){
        adversaire.sante-=conan.attaque
        console.log(this.pseudo + " attaque" + adversaire.pseudo + " en lançant un sort et fait" + attaque);
        conan.evoluer();
        adversaire.verifierSante();
    warInfo()
    }
    console.log(this.pseudo + ", " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau);
}

let helmet = new Magicien("Hemlet");
let conan = new Guerrier("Conan");

console.log(helmet.mageInfo());
console.log(conan.warInfo());

