
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