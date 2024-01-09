"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubMultipleFileService = void 0;

var _githubAccess = require("@/dataAccess/githubAccess");

var githubMultipleFileService = function githubMultipleFileService(files, message) {
  return regeneratorRuntime.async(function githubMultipleFileService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('44444444444', {
            username: process.env.GITHUB_USERNAME,
            branchName: process.env.GITHUB_BRANCNAME,
            repoName: process.env.GITHUB_REPONAME,
            token: process.env.PERSONAL_ACCESS_TOKEN,
            files: files,
            message: message
          });
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _githubAccess.commitMultipleFileGithub)({
            username: process.env.GITHUB_USERNAME,
            branchName: process.env.GITHUB_BRANCNAME,
            repoName: process.env.GITHUB_REPONAME,
            token: process.env.PERSONAL_ACCESS_TOKEN,
            files: files,
            message: message
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.githubMultipleFileService = githubMultipleFileService;