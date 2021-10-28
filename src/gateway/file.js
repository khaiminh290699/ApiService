const express = require("express");
const multer = require("multer");
const fs = require("fs");
 
const router = express.Router();
const upload = multer({ dest: "public/uploads" })

router.post("/upload", upload.single("file"), async (req, res) => {
  return res.send({ status: 200, data: { filename: req.file.filename, path: req.file.path } })
})

router.post("/remove", async (req, res) => {
  const { filenames = [] } = req.body;
  await Promise.all(filenames.map(async filename => {
    await new Promise((resolve, reject) => {
      fs.unlink(`${process.cwd()}/public/uploads/${filename}`, (err) => {
        if (err) return reject(err);
        resolve();
      })
    })
  }))
  return res.send({ status: 200 });
})

module.exports = router;