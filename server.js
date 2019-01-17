const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get("/stream", (req, res) => {
  res.status(200).set({
    connection: "keep-alive",
    "cache-control": "no-cache",
    "content-Type": "text/event-stream"
  });
  const data = {
    message: "hello world"
  };
  setInterval(() => {
    data.timestamp = Date.now();
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
