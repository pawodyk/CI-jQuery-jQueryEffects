$(document).ready(function () {

    // the function is changeing fading the whole thing instead of just a button as per instructions.
    $("#firstBtn")
        .mouseenter(function () {
            $(this).parent().fadeTo(100, .5);
        })
        .mouseleave(function () {
            $(this).parent().fadeTo(100, 1);
        });
    
});