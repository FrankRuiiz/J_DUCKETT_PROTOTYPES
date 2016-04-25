var people = [
    { name: 'Casey ', rate: 60 },
    { name: 'Camille', rate: 80 },
    { name: 'Gordon', rate: 75 },
    { name : 'Nigel', rate: 120 }
];


$(document).ready(function(){

    // priceRange acts as a filter
    function priceRange(person) {
        return (person.rate >= 65) && (person.rate <= 90);
    }

    // filter the people array and add matches to the results array
    var results = [];
    results = people.filter(priceRange);

    console.log(results);

});