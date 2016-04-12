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

    // puts new lat and long coor in var pin location
    var pinLocation = new google.maps.LatLng(40.782710, -73.965310);
    // Creates a new marker image with settings
    var pinIcon = new google.maps.MarkerImage(
        "map-marker-icon.png", // image from web
        null, // size is determined at runtime 
        null, // origin is 0,0 by default
        null, // anchor is bottom center of scaled image by default
        new google.maps.Size(50, 50) // sets image size to your specification
    );
    var startPosition = new google.maps.Marker({
        position: pinLocation, // set to var pinLocation configured above
        map: venueMap, // set to our map
        icon: pinIcon // sets icon to var pinIcon configured above 
    });
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