//a)

let tableau=[];
let posMin;
let valMin;
let posMax;
let valMax;


for(let i=0;i<10; i++) {
 let alea=Math.round(Math.random()*100-Math.random()*100);
 if (valMin===undefined || alea<valMin ){
     valMin=alea;
     posMin=i;

 }

    if (valMax===undefined || valMax<alea){
        valMax=alea;
        posMax=i;
    }
tableau.push(alea);
}
console.log(tableau);
    console.log(`valMin=${valMin}===>posMin=${posMin}`);
    console.log(`valMax=${valMax}===>posMax=${posMax}`);

//2a)

function tableauAleatoire(){
    let tab=[]
    for(let i=0;i<10; i++) {
let alea=Math.round(Math.random()*100-Math.random()*100);
tab.push(alea);
}
    return tab;
}
//2b) une autre facon decrire ,
/*
let tableau=tableauAleatoire();
let posMin,valMin,posMax,valMax;
for (let value of tableau) {

    if (valMin===undefined || valMin> value){
        valMin=value;
        posMin=tableau.indexOf(value);
    }
}
console.log(tableau);
console.log(`valMin=${valMin} ==>posMin=${posMin}`);
console.log(`valMax=${valMax} ==>posMax=${posMax}`);
 */

let tableau= tableauAleatoire(10);

let valMin=Math.min(...tableau);
let posMin=tableau.indexOf(valMin);

let valMax=Math.max(...tableau);
let posMax=tableau.indexOf(valMax);

