"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _mdBlog = require("@/services/md.blog.service");

function handler(req, res) {
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const blog = await createBlogService(req.body)
          res.status(200).json({
            data: req.body
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}