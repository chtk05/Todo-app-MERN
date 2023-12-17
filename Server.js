const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/ToDoRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.port || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.log(err));

app.use(router);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
