/* CORRECTION DE LEXERCICE PARTIE 1:



// 1)

// avec la boucle for

//let affichage="";
//for(let compteur=1; compteur<11; compteur++){
   // console.log(compteur);}

    // mode long   affichage=affichage+compteur+"";
    // 2eme facon  affichage+=compteur+"";
    //3eme facon    affichage+=`${compteur}`;

            //console.log(affichage);

// avec la boucle while;

//let compteur=1;
//while(compteur<11) {
//  console.log(compteur);
//  compteur++   }

//avec la boucle DO while /repeter;

//let compteur=1;
//do{
   // console.log(compteur);
    //compteur++

//while(compteur<11);

//2)afficher la somme des nombrs de 1 a 10:

//let somme=0;
//for(let i=1;i <=10; i++){
  //  somme+=i;
//} console.log(somme);

//3)Saisir deux nombres n et m.Dans le cas ou n est supérieur à m:

//let m=Number(prompt("M"));
//let n=Number(prompt("N"));

//a. afficher un messafe indiquant que n doit etre inferieur à m .(posez la condition)

//if (n<m){
  //  console.log('n doit être inférieur a m');
}

//b permuter n et m,puis afficher les nombres de n a m.==>TODO





//c Afficher les nombres de n à m de façon décroissante

if(n>m) {
    for (let i=n ; i>=m; i--){
        console.log(i);
    }
}

//d Afficher la somme des nombres pairs de n à m
let somme=0;
if(n>m){
    for(let i=n; i>=m; i--){
        if(i%2===0)
            somme+=i;
        }
    }
console.log(somme);

//4. Lire 10 nombres et trouver le plus grand.
//5. Lire 10 nombres et trouver le plus petit et son rang.



//6. Lire n nombres et en calculer la moyenne.
let n, somme,moyenne;
do{
    n=Number(prompt('Entrez le nombre de valeur a saisir'));
} while(Number.isNaN(n));


for(let i=0; i<n; i++) {
    let value=Number(prompt('Saisir la valeur${i}'));
    if(!Number.isNaN(value)){
    somme+=value;
}
}
moyenne=somme/compteur;
console.log(moyenne);

*/
