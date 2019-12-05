'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
  console.log(Date.now(), req.query);
});

console.log('#  Asumming that you run');
console.log('#      docker run -p PORT:8080 -it --rm --name node_logger frienddementor/general_logger');
console.log('#  Listening on PORT all GET request and log url arguments here.');
console.log('#  ');
console.log('#  ');
console.log('#  for example making the following GET request:');
console.log('#      http://localhost:PORT/?msg1=hello&msg2=world');
console.log('#  ');
console.log('#  you will get the following log:');
console.log('#      1575571784250 { msg1: \'hello\', msg2: \'world\' }');
console.log('#  ');
console.log('#  the timestamp of request reception following all the url arguments');
console.log('#  ');
console.log('  ');

app.listen(PORT, HOST);
