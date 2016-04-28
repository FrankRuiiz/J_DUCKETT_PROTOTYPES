

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
    
    duration: function(a, b) {  // add method duration
        a = a.split(':');       // split the time at the colon
        b = b.split(':');       // same 
        
        a = Number(a[0]) * 60 + Number(a[1]);   // convert the time to seconds
        b = Number(a[0]) * 60 + Number(a[1]);   // same
        
        return a- b;  // return a - b
    },
    
    date: function() {      // add a method called date 
        a = new Date(a);    // new date object to hold the date     
        b = new Date(b);    // new date object to hold the date 
        
        return a - b;       // return a - b
    }
};