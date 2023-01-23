"use strict";

const express = require("express");

let router = express.Router();

let auth = require("../../middleware/auth");

let Tag = require("../../models/Tag");

router.get("/", auth, function _callee(req, res) {
  let tags;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Tag.find());

        case 3:
          tags = _context.sent;
          res.json(tags);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0.message);
          res.status(500).send("Server Error");

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;