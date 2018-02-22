var Eleve = function (nom, prenom , age){
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;


};

Eleve.prototype.show = function(){
  if (this.age === undefined){
  this.age = "Je n'ai pas d'âge";
  }
  console.log(this.age);
};


var sullivan = new Eleve("Tobias", "Sullivan");








