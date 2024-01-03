"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _mdBlog = require("@/services/md.blog.service");

var _md = require("@/services/md.services");

function handler(req, res) {
  var query, newQuery, _ref, data, meta, blog;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = req.method;
          _context.next = _context.t0 === 'GET' ? 3 : _context.t0 === 'DELETE' ? 13 : 23;
          break;

        case 3:
          query = req.query;
          newQuery = {
            page: query.page,
            perpage: query.perpage
          };

          if (query.tag) {
            newQuery.tag = query.tag;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap((0, _md.getBlogJsonService)(newQuery));

        case 8:
          _ref = _context.sent;
          data = _ref.data;
          meta = _ref.meta;
          res.status(200).json({
            data: data,
            meta: meta
          });
          return _context.abrupt("break", 24);

        case 13:
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap((0, _mdBlog.deletedBlogService)(req.body.slug));

        case 16:
          blog = _context.sent;
          res.status(200).json({
            data: blog
          });
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t1 = _context["catch"](13);
          return _context.abrupt("return", _context.t1);

        case 23:
          return _context.abrupt("break", 24);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[13, 20]]);
}