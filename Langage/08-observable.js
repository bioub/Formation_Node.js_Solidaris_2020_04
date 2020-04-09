const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

// learnrxjs.com
interval(1000)
  .subscribe(() => console.log('1s'));
