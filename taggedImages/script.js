(function(){

    var $imgs = $('#gallery img');  // stores all images
    var $buttons = $('#buttons');   // store buttons element
    var tagged = {};                // create tagged object

    $imgs.each(function() {         // Loop through images
        var img = this;              // store image in variable img
        var tags = img.data('tags'); // Get this elements tags 
        
        if(tags) {     // if the element has tags 
            tags.split(',').forEach(function(tagName) {  // split at the comma (if it has more than 1 tag)
                if( tagged[tagName] == null ) {          // if the object doesn't have any tags 
                    tagged[tagName] = [];                // add an empty array to the object 
                }
                tagged[tagName].push(img);               // add the image to the array
            });
        }
        
    });
})();
