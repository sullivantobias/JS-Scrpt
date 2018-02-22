// ERROR

try {
   var a = 3;
   a();
}catch(e) {
    console.log (e) ;
}

// THROW ERROR

var numb = 2;

if (!Number.isInteger(numb)){
    throw new Error ("Pas un nombre");   
}