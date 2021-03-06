'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Kubernetes\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}\n`);
console.log(`Redis location: ${process.env.REDIS_SERVICE_HOST}:${process.env.REDIS_SERVICE_PORT}\n`);