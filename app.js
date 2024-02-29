const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  // res.sendFile('/public/index.html', { root: path.join(__dirname) });
  // res.send('Hello');
  res.send('<h1>Task Manager App!</h1>');
});

app.listen(port, () => {
  console.log(`https://localhost/${port}`);
  console.log(`Server is Running and listen on port ${port}`);
});
