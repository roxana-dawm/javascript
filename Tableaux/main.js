//LES TABLEAUX
/*
let stagiaires= ['Roxana','Talia','Sabrine','Bakary','Souly','Aoukas','Toulepi','Badji'] // premiere facon d'utiliser un tableau

let numeros= Array(1,35,84,-98) // 2eme :(ancien moins recommandé)
let tabMixed= new Array(true,58,'chat',null,[45,'joachim']); // troisieme: le plus récent

//les differentes tailles du tableaux

let taille=stagiaires.length
console.log(`tailleStagiaires=${taille}`);
console.log(`tailleNumero=${numeros.length}`);
console.log(`tailleTabMixed=${tabMixed.length}`);

//acces eux éléments du tableaux
console.log(stagiaires[0]) // 0 (1er nombre)=roxana etc etc avec autres stagiaires -1 a chaque fois

//ajouter un élément

stagiaires[8]='Tayachi';
console.log(stagiaires[8]);

stagiaires[2]='Guedda';
console.log(stagiaires[2]);


//méthodes de tableaux

numeros=[1,2,3,4];
console.log(numeros);

//ajout en fin de tableau
numeros.push(-5);
console.log(numeros);

//supprimer le dernier élément du tableau

numeros.pop();
console.log(numeros);


//ajout en debut du tableau
numeros.unshift(-5);
console.log(numeros);

//supprime le premier élément et si deux fois numeros.shift() alors 2 élément seront supprimés
numeros.shift();
console.log(numeros);


//Les boucles
//POUR --> FOR

for (let i=0;i<=20;i++){
    console.log(i);
}

//TANT QUE --> WHILE
let i=1;

while (i<=10){
    console.log(i);
    i++;
}

//REPETER JUSQUA --> DO WHILE

let compteur=1;

do{
    //mes instructions ->
    console.log(compteur);
    compteur++
}while(compteur<=10)


//FOR ...OF travail directment sur les éléments du tableau

let stagiaires= ['Roxana','Talia','Sabrine','Bakary','Souly','Aoukas','Toulepi','Badji']
for (let stagiaire of stagiaires ){
    console.log(stagiaire);

}

//FOR IN recupere les index du tableaux

for (const position in stagiaires) {
    console.log(`(${position},${stagiaires[position]})`)

}

//mot clé BREAK et CONTINUE


for(let i = 1; i<10,i++){
    if(i===6){
        break; //ou continue;
    }
    console.log(i);

}*/
/*
//Exercice partie 1:

for (let i=1; i<11; i++) {
     console.log(i);
}
//2afficher la sommes des nombres de 1 a 10

let somme=0
for (let i=1; i<11; i++) {
    somme+=i;// somme=somme+i
}

//3 decrire deux nombre n et m ...

let n,m

n=Number (prompt("N="));
m=Number( prompt("M="));

//dans le cas ou n est superieur a m
//a
if(n>m) {
    message="n doit être inferieur a m";
}
alert(message);

//b permuter les nombres m et n puis afficher les nombres de n a m
if(n>=m){}
let c=n;
n=m
m=c;

for (let i=n;i<=m; i++){
    console.log(i);
}


 */



