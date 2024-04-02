"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _setting = require("@/services/setting.service");

var _user = require("@/services/user.service");

function handler(req, res) {
  var user, settings;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _user.getUserService)());

        case 2:
          user = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _setting.getSettingsService)());

        case 5:
          settings = _context.sent;
          res.status(200).json({
            user: user,
            settings: settings
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}