"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _md = require("@/services/md.services");

function handler(req, res) {
  var query, newQuery, _ref, data, meta;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = req.query;
          newQuery = {
            page: query.page,
            perpage: query.perpage
          };

          if (query.tag) {
            newQuery.tag = query.tag;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap((0, _md.getBlogJsonService)(newQuery));

        case 5:
          _ref = _context.sent;
          data = _ref.data;
          meta = _ref.meta;
          res.status(200).json({
            data: data,
            meta: meta
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}