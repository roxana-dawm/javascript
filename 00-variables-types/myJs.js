
//on déclare ma variable
let maVariable;

typeof maVariable;

console.log(typeof maVariable);
//on fait une assignation ou une affectation


maVariable=25;
console.log(typeof maVariable);//number

maVariable="Joachim";
console.log(typeof maVariable);//string

maVariable=true;
console.log(typeof maVariable);//boolean

maVariable=null;
console.log(typeof maVariable);//object

//===================================================
//on dit que JavaScript est un langage faiblement typé
//====================================================


/*
//il est interdit de déclarer une variable plusieurs fois
let maVariable=78
console.log(maVariable);
 */


// Declaration suivie d'une assignation ou d"une affectation
let prenom="Joachim";

//On peut déclarer aussi des variables sur une même ligne au lieu d'un block
let age=15,nom,estMajeur;
nom='Bakary';
estMajeur=false;

//Les mots réservés au JavaScript ne peuvent servir de variables par exemple:let, var;//-->interdit

let_nom="DAWM";
console.log(_nom);

let monPrenom;//notation Kamel Case
let mon_prenom;

//UTILISATION DES VARAIBALES
//++++++++++++++++++++++++++

let a=45;
let b=-12;
    console.log(a+b);
    let c="5";
    console.log(a+b+c);

