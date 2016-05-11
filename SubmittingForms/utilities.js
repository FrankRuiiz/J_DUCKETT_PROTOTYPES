
// Helper function to add an event listener

function addEvent(el, event, callback) {
    if('addEventListener' in el) {      // If addEventListener is supported
        el.addEventListener(event, callback, false);  // use it
    }
    else {
        el['e' + event +  callback] = callback; // make a callback method of el
        
        el[event + callback] = function() {  // add a second method
            el['e' + event + callback](window.event);  // use it to call the previous function
        };
        el.attachEvent('on' + event, el[event + callback]); // use attachEvent() to call the second function, which calls the first one 
    }
}
