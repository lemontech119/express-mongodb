const express = require("express");
const indexRouter = require("./routers/index");

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api", indexRouter);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
