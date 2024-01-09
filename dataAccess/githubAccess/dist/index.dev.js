"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitMultipleFileGithub = exports.commitSingleFileGithub = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = require('path');

var commitSingleFileGithub = function commitSingleFileGithub(_ref) {
  var username, repoName, fileName, branchName, token, message, content, url, response;
  return regeneratorRuntime.async(function commitSingleFileGithub$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = _ref.username, repoName = _ref.repoName, fileName = _ref.fileName, branchName = _ref.branchName, token = _ref.token, message = _ref.message, content = _ref.content;
          url = "https://api.github.com/repos/".concat(username, "/").concat(repoName, "/contents/").concat(fileName);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].put(url, {
            message: message,
            content: content,
            branch: branchName
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 5:
          response = _context.sent;
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          console.error('Error in GitHub commit:', _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

exports.commitSingleFileGithub = commitSingleFileGithub;

var commitMultipleFileGithub = function commitMultipleFileGithub(_ref2) {
  var username, repoName, files, branchName, token, message, branchRes, latestCommitSha, commitRes, baseTreeSha, newTree, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, blob, treeRes, newTreeSha, newCommit;

  return regeneratorRuntime.async(function commitMultipleFileGithub$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = _ref2.username, repoName = _ref2.repoName, files = _ref2.files, branchName = _ref2.branchName, token = _ref2.token, message = _ref2.message;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/ref/heads/").concat(branchName), {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 3:
          branchRes = _context2.sent;
          latestCommitSha = branchRes.data.object.sha; // Adım 2: Mevcut tree'nin SHA'sını al

          _context2.next = 7;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/commits/").concat(latestCommitSha), {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 7:
          commitRes = _context2.sent;
          baseTreeSha = commitRes.data.tree.sha; // Adım 3: Yeni tree oluştur

          newTree = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 13;
          _iterator = files[Symbol.iterator]();

        case 15:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 24;
            break;
          }

          file = _step.value;
          _context2.next = 19;
          return regeneratorRuntime.awrap(_axios["default"].post("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/blobs"), {
            content: file.content,
            encoding: 'base64'
          }, {
            headers: {
              Authorization: "token ".concat(token),
              accept: 'application/vnd.github+json'
            }
          }));

        case 19:
          blob = _context2.sent;
          newTree.push({
            path: path.join(file.path, file.name),
            mode: '100644',
            type: 'blob',
            sha: blob.data.sha
          });

        case 21:
          _iteratorNormalCompletion = true;
          _context2.next = 15;
          break;

        case 24:
          _context2.next = 30;
          break;

        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](13);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 30:
          _context2.prev = 30;
          _context2.prev = 31;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 33:
          _context2.prev = 33;

          if (!_didIteratorError) {
            _context2.next = 36;
            break;
          }

          throw _iteratorError;

        case 36:
          return _context2.finish(33);

        case 37:
          return _context2.finish(30);

        case 38:
          _context2.next = 40;
          return regeneratorRuntime.awrap(_axios["default"].post("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/trees"), {
            base_tree: baseTreeSha,
            tree: newTree
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 40:
          treeRes = _context2.sent;
          // Adım 4: Yeni commit oluştur
          newTreeSha = treeRes.data.sha;
          _context2.next = 44;
          return regeneratorRuntime.awrap(_axios["default"].post("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/commits"), {
            message: message,
            tree: newTreeSha,
            parents: [latestCommitSha]
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 44:
          newCommit = _context2.sent;
          _context2.next = 47;
          return regeneratorRuntime.awrap(_axios["default"].patch("https://api.github.com/repos/".concat(username, "/").concat(repoName, "/git/refs/heads/").concat(branchName), {
            sha: newCommit.data.sha
          }, {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 47:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[13, 26, 30, 38], [31,, 33, 37]]);
};

exports.commitMultipleFileGithub = commitMultipleFileGithub;