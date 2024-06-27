require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const indexRouter = require("./routers/index");

const app = express();

const { MONGO_URI } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api", indexRouter);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
