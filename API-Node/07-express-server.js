const express = require('express');
const http = require('http');

const app = express();

app.get('/coucou', (req, res) => {
  res.json({
    msg: 'Coucou',
  });
});

app.get('/coucou/:name', (req, res) => {
  if (req.params.name !== 'Romain') {
    // res.statusCode = 404;
    return res.status(404).json({
      msg: 'Name not found',
    });
  }

  res.json({
    msg: 'Coucou ' + req.params.name,
  });
});

// 404 Middleware


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// const server = http.createServer(app);
// server.on('error', (err) => {
//   console.log(err);
// });
// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
