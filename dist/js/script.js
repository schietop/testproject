/*

Test javascript

*/



$(document).ready(function() {

	//focus on inputfield in older browsers
	if (!("autofocus" in document.createElement("input"))) {
		$("#myInputField").focus();
	}

});


var times_two;

times_two = function(x) {  
  return x * 2;
};








