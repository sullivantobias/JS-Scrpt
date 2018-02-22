
var eleve1 ={
      Prenom: "Sullivan",
      Notes: [13,3,20]
}

var eleve2 ={
      Prenom: "Pierre",
      Notes: [15,3,20]
}
function moyenne (tab,tab2){
  
  // Init ()
    var a = 0;
    var b = 0;
    var result;
  
  
      // array 
      for (var i = 0 ; i < tab.Notes.length && i < tab2.Notes.length; i++){
         a += tab.Notes[i]
         b += tab2.Notes[i]
      }
  
      // Average rounded 
        avgA = "("+(a / tab.Notes.length).toFixed(1)+ ') '+ tab.Prenom
        avgB = "("+(b / tab2.Notes.length).toFixed(1)+') ' + tab2.Prenom
        
        
      // return ternaire function 
     res  = ((a > b) ?  tab.Prenom+" est meilleur" 
             : (a == b) ? "Vous etes egaux" 
             :  tab2.Prenom+" est meilleur")
     return res, avgA , avgB; 
}

// Res 
function showRes () {
      var temp = document.querySelector('button')
      var result = document.querySelector('#result')
      var names = document.querySelector('#name')
      temp.addEventListener('click', function(){
        result.textContent = res;
        names.textContent = avgA+ " / "+avgB
      })
    }

moyenne(eleve1,eleve2)
showRes();


// Copyright Sullivan Tobias 2018 
