
/*********************************************************/
/* Showing or hiding whole div using the toggle function */
/*********************************************************/
$("#hideDOMNav").click(function() {
    $(".hideEvents").hide();
    $(".hideDOMNav").show();
    $(".restDOM").css("background-color", "black");
});


function highlightFamily(theThis) {
    //Used in-line as quick and dirty as only testing/hacking about
    //Used named colors instead of rgb due to above.
    $(theThis).css("background-color", "red");
    $(theThis).parent().css("background-color", "green");
    $(theThis).children().css("background-color", "blue");
    $(theThis).siblings().css("background-color", "orange");
    $(theThis).siblings().children().css("background-color", "black");

}


//Applying background colour to each element of the DOM chart after initially restyling it all black
$(".domHighlight").click(function(e) {
    $(".restDOM").css("background-color", "black");

    highlightFamily(this);
    //stop events being passed up the chain
    e.stopPropagation();
});




/*********************************************************************************
  This section is to change the section sizes based on media queries to enhance the
  responsiveness of the site to the end user devices.

  Also the modals are too loarge for small mobile devices so will be deactived on 
  them with an accompanying message
**********************************************************************************/

// Very Small Devices (Phones)
if ($(window).width() < 769){
    $(".interactive-elements").remove();
    $("figcaption").remove();    
    $("img").replaceWith("<em>IMG's removed from mobile view because associated interactive are disabled a small mobile devices</em>");

     window.alert("Due to the small device size the interactive elements have been removed to prevent poor user experience.");
     //remove modal links from menu
     //put up message

    $(".navbar-brand").replaceWith("<a class='navbar-brand' href='#''>jQuery</a>");


}
// Small Devices (Tablet)
else if ($(window).width() < 991){
     window.alert("small device - tablet");
     //put up message about "as you maybe viewing this on a tablet, and as such not have access to dev tools, you may not be able to perform some aspects of the practical exerices"
}
// Medium Devices (Laptop)
else if ($(window).width() < 1199){
     window.alert("medium device - tablet");
}
//Large Devices (Desktops)
else{
    window.alert("Large device - tablet");   
}
