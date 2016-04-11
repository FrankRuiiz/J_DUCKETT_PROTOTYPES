/**
 * Created by FrankyR on 4/10/2016.
 */


var myMap  = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location';

if(Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    myMap.textContent = 'Checking location...';
} else {
    myMap.textContent = msg;
}

function success(position) {
    msg = '<h3>Longitude:<br>';
    msg += position.coords.longitude + '</h3>';
    msg += '<h3>Latitude:<br>';
    msg += position.coords.latitude + '</h3>';
    myMap.innerHTML = msg;
}

function fail(msg) {
    myMap.textContent = msg;
    console.log(msg.code);
}

