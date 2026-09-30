const express = require("express");
const path = require("path");
const { bubbleSort, quickSort } = require("./sort");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/sort", (req, res) => {
  const algo = (req.query.algo || "bubble").toLowerCase();
  const arr = String(req.query.arr || "")
    .split(",")
    .filter((s) => s.trim() !== "")
    .map(Number);
  if (arr.some(Number.isNaN)) {
    return res.status(400).json({ error: "Query param arr must be comma separated numbers." });
  }
  const sorted = algo === "quick" ? quickSort(arr) : bubbleSort(arr);
  res.json({ algo, input: arr, sorted, student: "12302080501034" });
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  app.listen(PORT, () => console.log(`Array Sort API on http://localhost:${PORT}`));
}

module.exports = app;
