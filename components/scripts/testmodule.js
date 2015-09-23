module.exports = function (n) {

    




	var data = {};

	function fetch(url, options) {

	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url);
	    xhr.responseType = 'json';

	    xhr.onload = function() {
	        data = xhr.response;
	        data = restore(data);
	        options.onSuccess(data);
	    };

	    xhr.onerror = function() {
	        window.console.error('Error fetching data from', url);
	    };

	    xhr.send();
	}



	return n * 111




};