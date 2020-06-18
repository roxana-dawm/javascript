//NOTIONS DES OBJECTS EN JS

//Synthaxe à eviter
//let personne= new Object();
//personne.prenom="joachim";
//personne.age= 52;
//personne.sexe= 'M';
//console.log(personne);
//console.log(personne.age);


//let personne={prenom:'toulepi',age:23,sexe:'M'}
//console.log(personne);
//console.log(personne.age);
//console.log(personne['age']);
//console.log(typeof personne);

//let personneProps=Object.getOwnPropertyNames(personne);
//console.log(personneProps);


//SUITE notions

let a=2;
let b=3;

function addition(){

let resultat=a+b;
console.log(resultat);}

addition();

//appel de la fonction
//function addition (m, n) {
//console.log(m + n);}

//addition(7,5);

/*

function addition (m, n) {
    let resultat=m+n;
return resultat;
}

let autreResultat=addition(-7,5)*6;
console.log(autreResultat);


function addition(...listeArg) {
    let resultat=0
    for(const valeur of listeArg){
        resultat+=valeur;
    }
return resultat;
}


// La technique qu'on retrouve le plus en JS:

let addition2= function (...listeArg) {
    let resultat=0
    for(const valeur of listeArg){
        resultat+=valeur;
    }
    return resultat;}

    addition2(5);
*/
