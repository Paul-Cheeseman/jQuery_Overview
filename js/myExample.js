
/*******************************************************************************************
	To ensure the HTML Document is ready we run this function on the HTML document itself. 
	This ensues everything inside this function will run only when the DOM is loaded.
	Not needed when scripts are loaded at bottom of page
*********************************************************************************************/
//$(document).ready(function() { 

	/****************************************/
	/* Add text colour by class via onclick */
	/****************************************/	
	$("#addClassRed").click(function(){
		 $(".test-class").addClass("text-red"); 
 	});

	$("#addClassBlue").click(function(){
		 $(".test-class").addClass("text-blue"); 
 	});



	/********************************************/
	/* Add/rem text colour by class via onclick */
	/********************************************/	
	$("#addRemClassRed").click(function(){
		 $(".test-class").addClass("text-red");
		 $(".test-class").removeClass("text-blue");
 	});

	//Example of method chaining
	$("#addRemClassBlue").click(function(){
		 $(".test-class").addClass("text-blue").removeClass("text-red");		 
 	});




	


	/************************************************/
	/* Sliding div in/out using the toggle function */
	/************************************************/	
	$("#slideToggleButton").click(function() {
		$("#display-dashboard").slideToggle();
	});

	/***********************************************/
	/* Fading div in/out using the toggle function */
	/***********************************************/	
	$("#fadeToggleButton").click(function() {
		$("#display-dashboard").fadeToggle();
	});


	/*******************************************************/
	/* Sliding div in/out slowly using the toggle function */
	/*******************************************************/
	$("#slideToggleButtonSS").click(function() {
		$("#display-dashboard").slideToggle(5000);
	});

	/******************************************************/
	/* Fading div in/out slowly using the toggle function */
	/******************************************************/
	$("#fadeToggleButtonSS").click(function() {
		$("#display-dashboard").fadeToggle(5000);
	});
	


	/***************************************************/
	/* Add/rem text colour and background by mouseover */
	/***************************************************/
	$(".buttonClass").mouseover(function(){
		$(".buttonClass").removeClass("background-grey");
		$(".buttonClass").addClass("background-black");
		$(".buttonClass").addClass("text-red"); 
 	});

	$(".buttonClass").mouseleave(function(){
		$(".buttonClass").removeClass("background-black");
		$(".buttonClass").removeClass("text-red");
		$(".buttonClass").addClass("background-grey");
 	});



	/************************************************************************/
	/* Changing active elements inner html/text and changing it via onclick	*/
	/************************************************************************/	
	$(".buttonClass").click(function() {
		if ($(this).text() == "Odd amount")
    		$(this).text("Even amount");
    	else
			$(this).text("Odd amount");
	});







//});