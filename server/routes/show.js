const router = require("express").Router();

const { APP_BASE_URL } = require("../config/env");
const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) {
      return res.render("download", { error: "Link has been expired" });
    }

    return res.render("download", {
      uuid: file.uuid,
      filename: file.filename,
      filesize: file.size,
      downloadLink: `${APP_BASE_URL}/files/download/${file.uuid}`,
    });
  } catch (err) {
    res.render("downloadLink", { error: "Something went wrong." });
  }
});

module.exports = router;
