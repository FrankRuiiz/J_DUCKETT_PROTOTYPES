
(function(){
    var form = document.getElementById('login');    // get the form element

    addEvent(form, 'submit', function(e){   // when the user submit form
        e.preventDefault();                         // stop it being sent (for this example)
        console.log('this inside addEvent', this);
        var elements = this.elements;               // get all th form elements
        console.log('elements', elements);
        var username = elements.username.value;     // select username entered 
        var msg = 'Welcome ' + username;            // create welcome message
        document.getElementById('main').textContent = msg;  // write welcome message
    });
})();