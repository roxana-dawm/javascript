let  varPrimitif="Bonjour";
console.log(typeof varPrimitif);

let varStringObject= new String("Bonjour");
console.log(varStringObject);

class Personne {
    prenom;
    age;
    conjoint;
    constructor(p,a) {
        this.prenom=p;
        this.age=a;
    }
}

let personneTalia= new Personne("Talia",23);

let autrePersonne=new Personne("bakary",24);
console.log(autrePersonne===personneBakary);

