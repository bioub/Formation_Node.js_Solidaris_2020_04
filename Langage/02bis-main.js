// Module IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';

  for (var i = 0; i < 3; i++) {
    createButton('Button ' + (i+1));
  }
}());
