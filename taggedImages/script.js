(function(){

    var $imgs = $('#gallery img');  // stores all images
    var $buttons = $('#buttons');   // store buttons element
    var tagged = {};                // create tagged object

    $imgs.each(function() {         // Loop through images
        var img = this;              // store image in variable img
        var tags = $(this).data('tags'); // Get this elements tags
        
        if(tags) {     // if the element has tags 
            tags.split(',').forEach(function(tagName) {  // split at the comma (if it has more than 1 tag)
                if( tagged[tagName] == null ) {          // if the object doesn't have any tags 
                    tagged[tagName] = [];                // add an empty array to the object 
                }
                tagged[tagName].push(img);               // add the image to the array
            });
        }
    });
    
    $('<button>', {                     // create an empty button
        text: 'Show All',               // add text show all
        class: "active",                // make it active
        click: function() {             // add onclick handler 
            $(this)                     // get the clicked button
                .addClass('active')     // add the class of active     
                .siblings()             // get its siblings 
                .removeClass('active'); // remove class active from them     
            $imgs.show();               // show all images 
        }
    }).appendTo($buttons);              // append to buttons
    
    $.each(tagged, function(tagName) {  // for each tag name
        $('<button>', {                 // create and empty button
            text: tagName + ' (' + tagged[tagName].length + ')',   // add tag name
            click: function() {         // add click handler
                $(this)                 // the button clicked on
                    .addClass('active') // make clicked item active
                    .siblings()         // get its siblings
                    .removeClass('active');  // remove active class from them
                $imgs                   // with all of the images
                    .hide()             // hide them
                    .filter(tagged[tagName])  // find ones with this tag
                    .show();            // show just those images
            }
        }).appendTo($buttons);          // add to the buttons
    });
})();
