var request;                            // Latest image to be requested
var $current;                           // Image currently being shown
var cache = {};                        // Cache object
var $frame = $('#photo-viewer');        // Container for display image
var $thumbs = $('.thumb');              // Container for thumbnail image

function crossfade($img) {              // Function to fade between images
    console.log($img);                                    // New image is passed in as a parameter
    if ($current) {                     // If there is currently an image showing
        $current.stop().fadeOut('slow'); // Stop the animation and fade out
    }
    
    $img.css({                          // Set the CSS margins for the image
        marginLeft: -$img.width() / 2,  // Negative margin of half image's width
        marginTop: -$img.height() / 2   // Negative margin of half image's height
    });
    
    $img.stop().fadeTo('slow', 1);      // Stop animation on new image & fade in
    
    $current = $img;                    // New image becomes the current image
}

$(document).on('click', '.thumb', function(e) {  // When a thumbnail is clicked on

    var $img;                           // Create a local variable called $img
    var src = this.href;                // Store path to image
    request = src;                      // Store path again in request

    e.preventDefault();                 // Stop the default link behavior

    $thumbs.removeClass('active');      // Remove active class from all thumbs 
    $(this).addClass('active');         // Add active class to clicked thumb 

    if(cache.hasOwnProperty(src)) {             // If cache contains this image 
        if(cache[src].isLoading === false) {    // And if isLoading is false
            crossfade(cache[src].$img);         // Call crossfade() function
        }
    }
    else {                               // Otherwise it is not in cache
        $img = $('<img>');               // Store empty image element in $img
        cache[src] = {                   // Store this image in cache
            $img: $img,                  // Add the path to the image
            isLoading: true              // Set isLoading property to true
        };

        // Next few lines will run when image has loaded but are prepared first
        $img.on('load', function() {     // When image has loaded
            $img.hide();                 // Hide it

            // Remove is-loading class from frame and append new image to it
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;

            // If still most recently requested image then
            if (request === src) {
                crossfade($img);        // call crossfade function
            }                           // solves asynchronous oading issue
        });

        $frame.addClass('is-loading');   // Add is-loading class to frame


        $img.attr({
           'src': src,
            'alt': this.title || ''
        });
    }

});

$('.thumb').eq(0).click();
