
(function($){

    $.fn.accordion = function(speed) {

        this.on('click', '.accordion-control', function(e) {
            e.preventDefault();

            console.log($(this));
            $(this)
                .next('.accordion-panel')
                .not(':animated')
                .slideToggle(speed);
        });
        return this;
    } 
    
})(jQuery);

