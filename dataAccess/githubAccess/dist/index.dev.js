"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitMultipleFileGithub = exports.commitSingleFileGithub = void 0;

var _converters = require("@/helpers/converters");

var axios = require('axios');

var path = require('path');

var commitSingleFileGithub = function commitSingleFileGithub(_ref) {
  var username, repoName, fileName, branchName, token, message, text, content, url, response;
  return regeneratorRuntime.async(function commitSingleFileGithub$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = _ref.username, repoName = _ref.repoName, fileName = _ref.fileName, branchName = _ref.branchName, token = _ref.token, message = _ref.message, text = _ref.text;
          content = (0, _converters.toBase64)(text);
          url = "https://api.github.com/repos/".concat(username, "/").concat(repoName, "/contents/").concat(fileName);
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(axios.put(url, {
            message: message,
            content: content,
            branch: branchName
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 6:
          response = _context.sent;
          console.log(response.data);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.error('Error in GitHub commit:', _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]]);
};

exports.commitSingleFileGithub = commitSingleFileGithub;

var commitMultipleFileGithub = function commitMultipleFileGithub(_ref2) {
  var username, repoName, files, branchName, token, message, branchRes, latestCommitSha, commitRes, baseTreeSha, newTree, treeRes, newTreeSha, newCommit;
  return regeneratorRuntime.async(function commitMultipleFileGithub$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = _ref2.username, repoName = _ref2.repoName, files = _ref2.files, branchName = _ref2.branchName, token = _ref2.token, message = _ref2.message;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/ref/heads/").concat(branchName), {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 3:
          branchRes = _context2.sent;
          latestCommitSha = branchRes.data.object.sha; // Adım 2: Mevcut tree'nin SHA'sını al

          _context2.next = 7;
          return regeneratorRuntime.awrap(axios.get("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/commits/").concat(latestCommitSha), {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 7:
          commitRes = _context2.sent;
          baseTreeSha = commitRes.data.tree.sha; // Adım 3: Yeni tree oluştur

          newTree = files.map(function (file) {
            return {
              path: path.join(file.path, file.name),
              mode: '100644',
              type: 'blob',
              // sha: 'blob',
              content: file.content
            };
          });
          _context2.next = 12;
          return regeneratorRuntime.awrap(axios.post("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/trees"), {
            base_tree: baseTreeSha,
            tree: newTree
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 12:
          treeRes = _context2.sent;
          // Adım 4: Yeni commit oluştur
          newTreeSha = treeRes.data.sha;
          _context2.next = 16;
          return regeneratorRuntime.awrap(axios.post("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/commits"), {
            message: message,
            tree: newTreeSha,
            parents: [latestCommitSha]
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 16:
          newCommit = _context2.sent;
          _context2.next = 19;
          return regeneratorRuntime.awrap(axios.patch("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/refs/heads/").concat(branchName), {
            sha: newCommit.data.sha
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.commitMultipleFileGithub = commitMultipleFileGithub;