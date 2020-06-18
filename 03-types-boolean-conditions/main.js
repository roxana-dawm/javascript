
//LES BOOLEANS
//============

let estVrai=true;
let estFaux=false;

//OPERATEUR DE NEGATION

console.log(!estVrai)
console.log(!estFaux);

console.log("a"<"b");true
console.log("A"<"b"); false
console.log(0=='');true







// PREMIER EXEMPLE
/*
let age=45;
if (age>=25){
    console.log("Super Division");
}

if (age >=18 && age <25) {
    console.log("Division Normale");
}

if (age<18){
    console.log("Division Mineure");
}

//DEUXIEME EXEMPLE

let age=45;
if (age>=25){
    console.log("Super Division");
}else if((age>18)&& (age<25)) {
    console.log("Division Normale");

}else{
    console.log("Division Mineure");
}


//toutes valeurs booleennes fausses
let condition=false
condition=0;
condition='';
condition=NaN;
condition=undefined;

if (condition){
    console.log("Condition Verifiée!!!");
}


//OPERATEUR TERNAIRE

let age= number(prompt(message:"saisir votre age"));
let message;
if(age>=18) {
    message='vous êtes majeur(e)';

}else {
    message=`vous êtes mineur(e)`;
}
 alert(`message ${message}`);

//oU autre facon decrire sur une ligne = IF TERNAIRE

message=(age>=18? "vous êtes majeur(e)":"vous êtes mineur(e)");

alert(`message ${message}`);



//switch
let numeroDuJour= Number(prompt(message:"saisir le numero du jour de la semaine"));
let message;
switch(numeroDuJour) {
    case 1:
        message="lundi";
        break;
}
//ETC... et en dernier mettre

default:
    message="jour inconnu de notre systeme";
break;
}

alert(`votre saisie correspond au jour ${message}`);*/