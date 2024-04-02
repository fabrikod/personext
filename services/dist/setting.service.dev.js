"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSettingsService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess");

var _helpers = require("@/helpers");

var getSettingsService = function getSettingsService(settingName) {
  var settings, settingsJson;
  return regeneratorRuntime.async(function getSettingsService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getSettingsFileData)());

        case 2:
          settings = _context.sent;
          settingsJson = (0, _helpers.toObject)(settings);
          return _context.abrupt("return", settingName ? settingsJson[settingName] : settingsJson);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getSettingsService = getSettingsService;