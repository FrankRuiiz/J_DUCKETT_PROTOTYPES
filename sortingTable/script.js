

var compare = {             // Declare a compare object
    
    name: function(a, b){       // method name
        a = a.replace(/^the /i, '');    // remove 'the'
        b = b.replace(/^the /i, '');    // same
        
        if( a < b ) {           // if a is less than value b
            return -1;          // return -1
        }
        else {                  // otherwise 
            return a > b ? 1 : 0; // if a is greater than b, return 1 if they are the same, return 0
        }
    },
    
    duration: function(a, b) {
        
    },
    
    date: function() {
        
    }
};