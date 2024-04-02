"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStackService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess");

var _helpers = require("@/helpers");

var getStackService = function getStackService() {
  var stacks, jsonStacks;
  return regeneratorRuntime.async(function getStackService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getStackFileData)());

        case 2:
          stacks = _context.sent;
          jsonStacks = (0, _helpers.toObject)(stacks);
          return _context.abrupt("return", jsonStacks);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getStackService = getStackService;