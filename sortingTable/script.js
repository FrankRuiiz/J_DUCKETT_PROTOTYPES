

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

$('.sortable').each(function() {
    var $table = $(this);
    var $tbody = $table.find('tbody');
    var $controls = $table.find('th');
    var rows = $tbody.find('tr').toArray();  // store array containing rows

    $controls.on('click', function() {
        var $header = $(this);              // get the header
        var order = $header.data('sort');  //  get value of data-sort attribute
        var column;                        // declare var column

        // if selected item has ascending or descending class, reverse contents
        if ($header.is('.ascending') || $header.is('.descending')) {
            $header.toggleClass('ascending descending');  // toggle to other class
            $tbody.append(rows.reverse());                // reverse the array
        }
        else {
            $header.addClass('ascending');

            // remove asc or desc from all other headers
            $header.siblings().removeClass('ascending descending');

            if (compare.hasOwnProperty(order)) {        // if compare object has the method (order)
                column = $controls.index(this);         // search for column's index number

                rows.sort(function(a, b) {      // cal sort on rows array
                    a = $(a).find('td').eq(column).text(); // get the text of column in row a
                    b = $(b).find('td').eq(column).text(); // get text of column in row b
                    return compare[order](a, b);
                });
                $tbody.append(rows);
            }
        }
    });
});