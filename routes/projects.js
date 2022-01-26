const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("projects");
});

router.get("/latest", (req, res) => {
  res.send("latest");
});

router.post("/", (req, res) => {
  res.send("you posted");
});
// get any route that starts with /users
router.get("/:id", (req, res) => {
  res.send(`get project with ID ${req.params.id}`);
});

module.exports = router;
