const { EventEmitter } = require('events');

class UserService extends EventEmitter {
  create(user) {
    // insertion DB
    // setTimeout
    // setImmediate
    process.nextTick(() => {
      this.emit('user.created', user);
    });
  }
}

const userService = new UserService();

userService.on('user.created', (user) => {
  // SEND SMS
  // SEND EMAIL
  console.log(user);
});

// PLUS TARD
userService.create({
  username: 'Romain',
  password: '1234',
});
console.log('FIN');
