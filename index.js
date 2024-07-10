const express = require("express");
const urlroute = require("./routes/url");
const { connactToMongoDb } = require("./connact");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connactToMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("mongodb connacted")
);

app.use(express.json());

app.use("/url", urlroute);

app.get(":shortId", async (res, req) => {
  const shortId = req.param.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitohistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURl);
});

app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
