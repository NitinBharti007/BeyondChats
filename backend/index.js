const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy endpoint for email verification
app.post("/verify-email", (req, res) => {
  const { code } = req.body;
  if (code === "123456") {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: "Invalid code" });
  }
});

// Dummy endpoint for scraping status
app.get("/scraping-status", (req, res) => {
  const dummyData = {
    detected: 10,
    scraped: 7,
    pending: 3,
    pages: [
      { url: "https://example.com/page1", status: "scraped", chunks: ["Chunk 1", "Chunk 2"] },
      { url: "https://example.com/page2", status: "pending", chunks: [] },
    ],
  };
  res.json(dummyData);
});

// Dummy endpoint for fetching meta-description
app.post("/fetch-meta", (req, res) => {
  const { url } = req.body;
  res.json({
    success: true,
    description: "This is a dummy meta-description for " + url,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});