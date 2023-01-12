const express = require("express");
const router = express.Router();

router.get("/tweets", (req, res) => {
  const str = [
    {
      name: "bing bong",
      msg: "hi from bing bong",
      username: "bingbong 123",
    },
  ];

  res.end(JSON.stringify(str));
});

router.post("/addTweet", (req, res) => {
  res.end("N/A");
});

module.exports = router;
