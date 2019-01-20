$(document).ready(function () {

    $("#firstBtn").click(function() { $(this).hide() });

    
    //Other fuctions performed on the first button

    // *** hiding paragraph using toggle(); ***

    // $("#firstBtn").click(function() { $(this).siblings("p").toggle("slow") });
    // $("#firstBtn").click(function() { $(this).siblings("p").toggle("medium") });
    // $("#firstBtn").click(function() { $(this).siblings("p").toggle("fast") });
    // $("#firstBtn").click(function() { $(this).siblings("p").toggle(5000) });
    

    // *** hiding paragraph using slideToggle() ***

    // $("#firstBtn").click(function() { $(this).siblings("p").slideToggle("slow") });
    // $("#firstBtn").click(function() { $(this).siblings("p").slideToggle("medium") });
    // $("#firstBtn").click(function() { $(this).siblings("p").slideToggle("fast") });
    // $("#firstBtn").click(function() { $(this).siblings("p").slideToggle(5000) });
    

    // *** hiding paragraph using fadeToggle() ***

    // $("#firstBtn").click(function() { $(this).siblings("p").fadeToggle("slow") });
    // $("#firstBtn").click(function() { $(this).siblings("p").fadeToggle("medium") });
    // $("#firstBtn").click(function() { $(this).siblings("p").fadeToggle("fast") });
    // $("#firstBtn").click(function() { $(this).siblings("p").fadeToggle(5000) });

});