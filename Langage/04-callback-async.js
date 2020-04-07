setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// ^
// |
// |                           lg            lg    lg      lg
// |st - st - st - st - lg ... cbB ...       cbA - cbD ... cbC
// 0---------------------------10------------500-----------1000->
//                      E      B             A     D       C

// function main() {
//   EVENT LOOP
//   do {
//     v8.executeJsSync();
//   } while (waitForCallbackInTaskQueue())
// }

// file d'attente (0ms): cbB
// file d'attente (10ms):
// file d'attente (500ms): cbA - cbD

// Jake Archibald : JSConf Asia 2018
// In the loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
