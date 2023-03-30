const dotenv = require('dotenv');

const connectToDatabase = require('./src/modules/database/connect');

dotenv.config();

require('./src/modules/express');

connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");

// const { Person } = require("./person");
// const person = new Person('Lucas');