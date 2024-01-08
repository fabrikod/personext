"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var axios = require('axios');

function handler(req, res) {
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          createGitHubFiles('abdullahonden', 'personext', 'main', files, 'Add multiple files', process.env.PERSONAL_ACCESS_TOKEN);
          res.status(200).json({
            data: 'test1'
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function createGitHubFiles(owner, repo, branch, files, message, token) {
  var branchRes, latestCommitSha, commitRes, baseTreeSha, newTree, treeRes, newTreeSha, newCommit;
  return regeneratorRuntime.async(function createGitHubFiles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios.get("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/git/ref/heads/").concat(branch), {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 2:
          branchRes = _context2.sent;
          latestCommitSha = branchRes.data.object.sha;
          console.log('latestCommitSha', latestCommitSha); // Adım 2: Mevcut tree'nin SHA'sını al

          _context2.next = 7;
          return regeneratorRuntime.awrap(axios.get("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/git/commits/").concat(latestCommitSha), {
            headers: {
              Authorization: "token ".concat(token)
            }
          }));

        case 7:
          commitRes = _context2.sent;
          baseTreeSha = commitRes.data.tree.sha; // Adım 3: Yeni tree oluştur

          newTree = files.map(function (file) {
            return {
              path: file.path,
              mode: '100644',
              type: 'blob',
              content: file.content
            };
          });
          _context2.next = 12;
          return regeneratorRuntime.awrap(axios.post("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/git/trees"), {
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
          return regeneratorRuntime.awrap(axios.post("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/git/commits"), {
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
          return regeneratorRuntime.awrap(axios.patch("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/git/refs/heads/").concat(branch), {
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
} // Örnek kullanım


var files = [{
  path: 'data/file1.txt',
  content: 'Hello World 1'
}, {
  path: 'public/file2.txt',
  content: 'Hello World 2'
}, {
  path: 'utils/file3.txt',
  content: 'Hello World 3'
}];