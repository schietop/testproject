var navigation = require('./navigation');
var triggerNavigation = document.querySelector('.toggle-navigation');

document.addEventListener('DOMContentLoaded', function() {
  triggerNavigation.addEventListener('click', navigation.toggleNavigation);
});