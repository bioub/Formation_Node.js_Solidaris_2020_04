// Module IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';

  var tmp = 'locale au module';

  function createButton(content) {
    const btnEl = document.createElement('button');
    btnEl.innerText = content;

    btnEl.addEventListener('click', () => {
      console.log(content);
    });

    document.body.appendChild(btnEl);
  }

  // En ES2020 l'objet global => globalThis
  // globalThis.createButton = createButton;
  window.createButton = createButton;
})();
