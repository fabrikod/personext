"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess");

var _helpers = require("@/helpers");

var getUserService = function getUserService() {
  var user, jsonUser;
  return regeneratorRuntime.async(function getUserService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getUserFileData)());

        case 2:
          user = _context.sent;
          jsonUser = (0, _helpers.toObject)(user);
          jsonUser.fullName = "".concat(jsonUser.name, " ").concat(jsonUser.surname);
          return _context.abrupt("return", jsonUser);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getUserService = getUserService;