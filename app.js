const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(
        `Server is Running and listen on port ${port} & DB is CONNECTED...`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
