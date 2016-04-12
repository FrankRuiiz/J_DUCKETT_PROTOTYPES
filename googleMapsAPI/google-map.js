/**
 * Created by FrankyR on 4/12/2016.
 */

function initmap() {
    // Set up the map options
    var mapOptions = {
        center: new google.maps.LatLng(40.782710, -73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13,
        styles: [ // The styles property is an array of objects
            {
                stylers: [
                    { hue: '#00ff6f' }, // styles overall map colors
                    { saturation: -50 } // styles overall map saturation
                ]
            },
            {
                featureType: 'road', // road features
                elementType: 'geometry', // their geometry or 'lines'
                stylers: [
                    { lightness: 100 }, // lightness of roads
                    { visibility: 'simplified' } // level of road detail
                ]
            },
            {
                featureType: 'transit', // public transportation features
                elementType: 'geometry', // their geometry or 'lines
                stylers: [
                    { hue: '#ff6600' },  // color of public transport
                    { saturation: +80 } // saturation of public transport
                ]
            }
        ]
    };
    var venueMap;
    // Map() draws a map on the element with id 'map'
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    // Creates a script element
    var script = document.createElement('script');
    // Sets the src attribute to google maps api
    var api_key = 'AIzaSyDC_5DIohM0Mq-mtaIhBJs-di6euavNi0M';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + api_key + '&callback=initmap';
    // Adds the src element to the page, at the end of body tag
    document.body.appendChild(script);
}

window.onload = loadScript;