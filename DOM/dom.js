// Red Interval Test , With Childs nodes 



// Paragraph Section
var parent = document.querySelector('#parent');

var second = document.createElement('p');
var third = document.createElement('p');
second.textContent = 'Second Child';
third.textContent = 'Third Child';

parent.appendChild(second);
parent.insertBefore(third, second);

var childs = parent.childNodes;

for (var i = 0; i < childs.length; i++) {
    var cc = childs[i];
    cc.addEventListener('click', function (e) {
        setInterval(function () {
            e.target.classList.toggle('red');
        }, 1000);
    });


}




// Random Color Section 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// UL section
var secondDiv = document.querySelectorAll('div')[1];
var ul = document.createElement('ul');
ul.textContent = 'List';
secondDiv.appendChild(ul);

for (var i = 1; i < 7; i++) {
    var liste = document.createElement('li');
    liste.style.color = getRandomColor();

    liste.textContent = "I'm the " + i + " element created with JS and Random Color";
    ul.appendChild(liste);
    if (i == 6) {
        liste.style.color = '';
        liste.textContent = ' I can\'t take properties of thoses li, because i\'m the last children ';
        setInterval(function () {
            liste.classList.toggle('pink');
        }, 1000);

    }

}

//Copyright Sullivan Tobias 2018