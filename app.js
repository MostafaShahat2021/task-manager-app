const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log(`https://localhost/${port}`);
  console.log(`Server is Running and listen on port ${port}`);
});
