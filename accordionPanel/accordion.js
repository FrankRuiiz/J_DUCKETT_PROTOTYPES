/**
 * Created by FrankyR on 4/17/2016.
 */

$('.accordion').on('click', '.accordion-control', function(e) {
    e.preventDefault();
    $(this)
        .next('.accordion-panel') // selects the following panel
        .not(':animated')         // if it is not currently animating
        .slideToggle();           // Use slide toggle to show or hide it
});