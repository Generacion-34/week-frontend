const ToDo = require("./ToDo");
const User = require("./User");

//! (1:n) ToDo -> userId
ToDo.belongsTo(User)
User.hasMany(ToDo)