const express = require("express");

const cors = require("./cors");
const authorize = require("./authorize");

module.exports = [
  cors,
  express.urlencoded({extended:true}),
  express.json(),
  authorize
]