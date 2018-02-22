(function () {

    //init 
    var i = 0;
    var j = 0;
    var inter = setInterval(function () {

        j = i++;
        //console.log(j);
        if (j == 10) {

            alert("Je suis = " + j);
            clearInterval(inter);

        }

    }, 1000);

})();