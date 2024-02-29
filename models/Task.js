const mongoose = require('mongoose');

const TaskSchmema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});
module.exports = mongoose.model('Task', TaskSchmema);
