// JSHint
// { eqeqeq: true, semi: true, stupidy: true }

function setTimeoutSync(cb, delay) {
  // bloque le thread pendant delay ms
  const debut = Date.now();
  while (debut + delay > Date.now());

  cb();
}

function sleep(delay) {
  // bloque le thread pendant delay ms
  const debut = Date.now();
  while (debut + delay > Date.now());
}

// ...1s... 0 ...1s... 1 ...1s... 2
for (var i = 0; i < 3; i++) {
  sleep(1000);
  console.log(i);
}

// ...1s... 0 ...1s... 1 ...1s... 2
for (var i = 0; i < 3; i++) {
  setTimeoutSync(function () {
    console.log(i);
  }, 1000);
}

// ...1s... 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
