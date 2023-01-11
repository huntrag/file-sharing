const router = require("express").Router();

const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  const file = await File.findOne({ uuid: req.params.uuid });
});

module.exports = router;
