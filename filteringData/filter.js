var selectMin = document.getElementById('value-min');
var selectMax = document.getElementById('value-max');
var html5Slider = document.getElementById('html5');


function createOptions1() {
    for( var i = 0; i<=100; i+=10) {
        var option = document.createElement('option');
        option.text = i;
        option.value = i;

        selectMin.appendChild(option);
    }
}

createOptions1();

function createOptions2() {
    for( var i = 0; i<=100; i+=10) {
        var option = document.createElement('option');
        option.text = i;
        option.value = i;

        selectMax.appendChild(option);
    }
}

createOptions2();


(function(){
    var people = [
        {name: 'Casey ', rate: 60},
        {name: 'Camille', rate: 80},
        {name: 'Gordon', rate: 75},
        {name: 'Nigel', rate: 120}
    ];
    
    var rows = [],
        $min = 20,
        $max = 80,
        $table = $('#rates');
    
    function makeRows() {
        people.forEach(function(person) {
           var $row = $('<tr>');
            $row.append( $('<td>').text(person.name) );
            $row.append( $('<td>').text(person.rate) );
            rows.push({
                person: person,
                $element: $row
            })
        });
    }
    
    function appendRows() {
        var $tbody = $('<tbody>');
        rows.forEach(function(row) {
           $tbody.append(row.$element);
        });
        $table.append($tbody);
    }

    function update(min, max) {
        rows.forEach(function(row) {
           if (row.person.rate >= min && row.person.rate <= max) {
               row.$element.show();
           }
            else {
               row.$element.hide();
           }
        });
    }

    function init(){
        makeRows();
        appendRows();
        update($min.val(), $max.val());
    }
    $(init);
})();








// var people = [
//     { name: 'Casey ', rate: 60 },
//     { name: 'Camille', rate: 80 },
//     { name: 'Gordon', rate: 75 },
//     { name : 'Nigel', rate: 120 }
// ];
//
//
// $(document).ready(function(){
//
//     // priceRange acts as a filter
//     function priceRange(person) {
//         return (person.rate >= 65) && (person.rate <= 90);
//     }
//
//     // filter the people array and add matches to the results array
//     var results = [];
//     results = people.filter(priceRange);
//
//     console.log(results);
//
// });