//LES NOMBRES EN JS
//==================
/*
20;entier
-45;negatif
2.654;flotant
-231.254;double negatif

//Opération de bases

let addition=45+3.2;
console.log(`resultat=${addition}`);

let soustraction=45-8;
console.log(`soustraction=${soustraction}`);

let multiplication=45*3.2;
console.log(`multiplication=${multiplication}`);

let division=45/8;
console.log(`division=${division}`);

let modulo=45%8;
console.log(`modulo=${modulo}`);

//ORDRE DE PRIORITE DES OPERATIONS
//================================
let resultat= 3 - 9 * 2;
console.log(`3-9*2=${resultat}`);
//la multiplication est prioritaire sur l'addition , mais on peut casser l'ordre de priorité avec des parenthèses

resultat=(3-9)*2
console.log(`(3-9)*2= ${resultat}`);

//LES EXPOSANTS
//==============

console.log(2**3);
console.log(2**5);
console.log(5**3);

//LE NOMBRE NaN OU NOT A NUMBER
//=============================
resultat=0/0;
console.log(`resultat=${resultat}`);
console.log(typeof resultat)

resultat=1/NaN;
console.log(`resultat=${resultat}`);

resultat=1/0;
console.log(`resultat=${resultat}`);
console.log(typeof resultat);

resultat=-1/0
console.log(`resultat=${resultat}`);

resultat=0 ou -0
console.log(`resultat=${resultat}`);



LES OPERATEURS D'ASSIGNATION

let x=3;
x=x+4;
x+=6; // meme que x=x+6
x-=1;
x*=1;
x/=5;

x=12;
x%=5;

x++;// même que x=x+1=post incrementation et x--; // meme que x=x-1; pre incrementation
console.log(`x=${x}`);

let a=25;
x=3;
console.log(a+x)


*/
//EXERCICES
console.log(1.5+1.5*2)=4.5
console.log((10%6)**2);=16
console.log(200+0/0); =NaN

//LES ARRONDIS

console.log(math.floor(x:0.9)) ;(0)
console.log(math.floor(x:1.1)) ;(1)


console.log(math.round(x:0.49)); (0)
console.log(math.round(x:0.5));(1)
console.log(math.round(x:2.9));(3)


console.log(math.ceil(x:0.1)); (1)
console.log(math.ceil(x:0.9));(1)
console.log(math.ceil(x:21)); (21)
console.log(math.ceil(x:21.01);(22)



//GENERATEUR DE NOMBRES ALEATOIRES

let aleatoire=math.random();
console.log(`aleatoire=${aleatoire}`);

//OPERATEUR DE COMPARAISON
console.log(4<5); // la console va afficher TRUE
console.log(4>5); // la console va afficher FALSE
console.log(4<=3);
console.log(4<=4);

console.log(4==3); false
console.log(4==4);true
console.log(4=='4');  true
console.log(4==='4'); // les valeurs et les types sont comparés donc c'est false avec 3=
console.log(4===4); true
console.log(4 !=4); false //!=different de
console.log(4!='4');false // compare la valeur de gauche et valeur de droite
console.log(4!==4);false

