const { Observable } = require('rxjs');
const { take } = require('rxjs/operators');

function interval(delayMs) {
  return new Observable((observer) => {
    const _interval = setInterval(() => {
      observer.next();
    }, delayMs);

    return () => {
      clearInterval(_interval);
    };
  });
}

// learnrxjs.com
interval(1000)
  .pipe(take(5))
  .subscribe(() => console.log('1s'));
