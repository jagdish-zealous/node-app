const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
