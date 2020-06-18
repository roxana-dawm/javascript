//chaines de caracteres

let maChaine='Chien'; // sous forme de string [C,h,i,e,n]

console.log(maChaine.charAt(0));
console.log(maChaine.charAt(3));
//console.log(`longeur=${maChaine.length}`)


//fonction substring "tu recupère a partir de ... à.."
maChaine="YouTube";
console.log(maChaine.substr((1,4)));
console.log(maChaine.substring(1));


//longueur/length
maChaine=" joachim  1969";
console.log(`longueur=${maChaine.length}`);

//comparaison
let a='a';
let b='b';
console.log(a<b);

a='add';
b='ab';
console.log(a<b);

a='a';
b='B';
console.log(a<b);

//maChaine="Red Dragon"
//console.log(maChaine.length);
//console.log(maChaine.indexOf("Red"));
//console.log(maChaine.indexOf("RedScale"));
//console.log(maChaine.indexOf("Dragon",0));
//console.log(maChaine.indexOf("Dragon",4));
//console.log(maChaine.indexOf(" ",3));

//console.log(maChaine.startsWith("Red"));
//console.log(maChaine.startsWith("red"));

//console.log(maChaine.endsWith("Red"));
//console.log(maChaine.endsWith("d Dragon"));

//maChaine="formation,html,css,js,jquery,ajax,merise,sql";

//let resultat=maChaine.split();
//console.log(resultat.length);
//console.log(maChaine.split(","));

//maChaine="Bak,ary"
//console.log(maChaine.split("a"));

//maChaine="la poussiere du desert de l'afrique";
//let resultat=maChaine.replace("afrique","amerique");
//resultat.replace("poussiere","pluie");
//console.log(resultat);

//resultat.replace("_","_");
//console.log(resultat);




