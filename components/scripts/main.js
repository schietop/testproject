/*

Test javascript

*/

/*var $ = require("jquery");
var Mustache = require("mustache");*/
var Widget = require("./dataWidget.js");


var w = Widget();
w.loadData("./js/data.json");
w.appendTo('#dataArea');


