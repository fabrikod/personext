"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubSingleFileService = exports.githubMultipleFileService = void 0;

var _githubAccess = require("@/dataAccess/githubAccess");

var githubMultipleFileService = function githubMultipleFileService(files, message) {
  return regeneratorRuntime.async(function githubMultipleFileService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _githubAccess.commitMultipleFileGithub)({
            username: process.env.GITHUB_USERNAME,
            branchName: process.env.GITHUB_BRANCNAME,
            repoName: process.env.GITHUB_REPONAME,
            token: process.env.PERSONAL_ACCESS_TOKEN,
            files: files,
            message: message
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.githubMultipleFileService = githubMultipleFileService;

var githubSingleFileService = function githubSingleFileService(base64, message, pathAndFileName) {
  return regeneratorRuntime.async(function githubSingleFileService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _githubAccess.commitSingleFileGithub)({
            username: process.env.GITHUB_USERNAME,
            branchName: process.env.GITHUB_BRANCNAME,
            repoName: process.env.GITHUB_REPONAME,
            token: process.env.PERSONAL_ACCESS_TOKEN,
            fileName: pathAndFileName,
            message: message,
            content: base64
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.githubSingleFileService = githubSingleFileService;