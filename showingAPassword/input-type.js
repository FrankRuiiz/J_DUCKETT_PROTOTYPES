(function(){

    var pwd = document.getElementById('pwd');       // get password input
    var chk = document.getElementById('showPwd');   // get checkbox

    addEvent(chk, 'change', function(e) {       // when user clicks on checkbox
        var target = e.target || e.srcElement;  // get that element
        console.log('target: ', e.target);

        try {                       // try the following code block
            if(target.checked) {    // if the checkbox is checked
                pwd.type = 'text';  // set pwd type to text
            }
            else {                      // otherwise
                pwd.type = 'password';  // set pwd type to password
            }
        }
        catch (error) {                 // if this causes an error
            alert('This browser cannot switch type');  // notify the user
        }

    });
})();
