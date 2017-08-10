
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

// Very Small Devices (Phones portraint)
if ($(window).width() < 400){
   //if screen width less that 400, reduce to menu title to avoid miss-alignment due to overspill
    $(".navbar-brand").replaceWith("<a class='navbar-brand' href='#''>jQuery</a>");
}

if (($(window).width() > 720) && ($(window).width() < 820)){
   //if screen width less that 400, reduce to menu title to avoid miss-alignment due to overspill
    $(".navbar-brand").replaceWith("<a class='navbar-brand' href='#''>jQuery</a>");
}


// Very Small Devices (Phones portraint)
if ($(window).width() < 720){
    //Removing the jQuery Dashboard and the interactive DOM because they are fixed width of 650
    $(".interactive-elements").remove();
    //Removing the img for reason given!
    $("figcaption").remove();    
    $(".screen-setup-img").replaceWith("<em>IMG's removed from mobile view because associated interactive elements are disabled a small mobile devices</em>");

    window.alert("Due to the small device size the interactive elements have been removed to prevent poor user experience.");
}


$(window).on("orientationchange",function(){
  location.reload(true);
});
