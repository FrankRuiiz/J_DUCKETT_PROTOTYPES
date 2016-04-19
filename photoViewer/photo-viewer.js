var request;                            // Latest image to be requested
var $current;                           // Image currently being shown
var casche = {};                        // Cache object
var $frame = $('#photo-viewer');        // Container for display image
var $thumbs = $('.thumb');              // Container for thumbnail image

function crossfade($img) {              // Function to fade between images
                                        // New image is passed in as a parameter
    if ($current) {                     // If there is currently an image showing
        $current.stop().fadeOut('slow'); // Stop the animation and fade out
    }
    
    $img.css({                          // Set the CSS margins for the image
        marginLeft: -$img.width() / 2,  // Negative margin of half image's width
        marginTop: -$img.height() / 2   // Negative margin of half image's height
    });
    
    $img.stop().fadeTo('slow, 1');      // Stop animation on new image & fade in
    
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
    else {
        $img = $('<img>');
        cache[src] = {
            $img: $img,
            isLoading: true
        }
    }

});
