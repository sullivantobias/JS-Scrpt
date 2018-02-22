(function() {


    var chiffre = Math.round(Math.random() * 10)
  
    var essai;
  
    for (var i = 0; i < 4; i++) {
      if (i == 0) {
        essai = prompt("Tentez votre chance")
      } else {
        essai = prompt("Retentez")
      }
  
      essai = parseInt(essai, 10)
      if (essai == chiffre) {
        console.log(essai)
        break;
      } else if (essai > chiffre) {
        alert(" Trop haut ")
        console.log(essai)
      } else {
        alert(" Trop bas ")
        console.log(essai)
      }
    }
  
    var result = (essai == chiffre) ? alert("Bravo le chiffre etait : " + chiffre) : alert("Perdu")
  
  
  })()
  