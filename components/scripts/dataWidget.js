module.exports = DataWidget;

var Mustache = require("mustache");

var element;

function DataWidget (opts) {

    if (!(this instanceof DataWidget)) return new DataWidget(opts);
    this.element = document.createElement('div');
    element = this.element;
}

DataWidget.prototype.appendTo = function (target) {

    if (typeof target === 'string') target = document.querySelector(target);
    target.appendChild(this.element);

};

DataWidget.prototype.loadData = function (url) {

	var template = "{{#speakers}}<h2>{{name}}</h2><p>{{bio}}</p>{{/speakers}}";

	var json = {};
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';

    xhr.onload = function() {
        json = xhr.response;
        var html = Mustache.to_html(template, json);
        element.innerHTML = html;
    };

    xhr.onerror = function() {
        window.console.error('Error fetching data from', url);
    };

    xhr.send();

};