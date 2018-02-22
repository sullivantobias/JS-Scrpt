// We select all the a
var lia = document.querySelectorAll('li a');

// We avoid conflict by calling this function 
(function () {
    for (var i = 0; i < lia.length; i++) {
        //Loop to set variable
        var li = lia[i];
        // Event Listener Section
        li.addEventListener('click', function () {
            // After onclik we remove the class active-li 
            document.querySelector('.active-li').classList.remove('active-li');
            // And we put active-li on the actual element (this)
            this.classList.add('active-li');
            // If this contains this class 
            if (this.classList.contains('active-li')) {
                // We are setting the variable to get the matching href
                var hrefContent = document.querySelector(this.getAttribute('href'));
                // After onclik we remove the class active-content
                document.querySelector('.active-content').classList.remove('active-content');
                // And we put active-content on the actual element 
                hrefContent.classList.add('active-content');
            }
        });
    }
})();


// Copyright Sullivan Tobias 2018 