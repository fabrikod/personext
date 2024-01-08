"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitFileGithub = void 0;

var _converters = require("@/helpers/converters");

var axios = require('axios');

var commitFileGithub = function commitFileGithub(_ref) {
  var username, repoName, fileName, branchName, type, text, content, message, url, response;
  return regeneratorRuntime.async(function commitFileGithub$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = _ref.username, repoName = _ref.repoName, fileName = _ref.fileName, branchName = _ref.branchName, type = _ref.type, text = _ref.text;
          content = (0, _converters.toBase64)(text);
          message = "".concat(type, " ").concat(fileName);
          url = "https://api.github.com/repos/".concat(username, "/").concat(repoName, "/contents/").concat(fileName);
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(axios.put(url, {
            message: message,
            content: content,
            branch: branchName
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 7:
          response = _context.sent;
          console.log(response.data);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          console.error('Error in GitHub commit:', _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]]);
};

exports.commitFileGithub = commitFileGithub;