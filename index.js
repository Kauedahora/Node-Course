// const { Person } = require("./person");

const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config(); // Configura as variáveis do .env na nossa aplicação

connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");

require("./modules/express");

// const person = new Person("Kauê");
