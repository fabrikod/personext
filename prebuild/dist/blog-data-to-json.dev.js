"use strict";

var fs = require('fs').promises;

var path = require('path');

var yaml = require('js-yaml'); // Utility function for parsing YAML content


var parseYaml = function parseYaml(content) {
  return yaml.load(content);
}; // Reads and returns the list of files in a directory


var readDirectoryFiles = function readDirectoryFiles(directoryPath) {
  return regeneratorRuntime.async(function readDirectoryFiles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fs.readdir(directoryPath));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Error reading directory:', _context.t0);
          return _context.abrupt("return", []);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // Reads and returns the content of a file


var readFileContent = function readFileContent(filePath) {
  return regeneratorRuntime.async(function readFileContent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fs.readFile(filePath, 'utf8'));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error('Error reading file:', _context2.t0);
          return _context2.abrupt("return", null);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // Writes data to a file


var writeFileContent = function writeFileContent(filePath, data) {
  return regeneratorRuntime.async(function writeFileContent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fs.writeFile(filePath, data));

        case 3:
          _context3.next = 8;
          break;

        case 5:
          _context3.prev = 5;
          _context3.t0 = _context3["catch"](0);
          console.error('Error writing file:', _context3.t0);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 5]]);
}; // Processes blog files and extracts metadata


var getBlogMetaData = function getBlogMetaData(directoryPath) {
  var files, blogMetaDataArray, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, mdFilePath, fileStats, content, json;

  return regeneratorRuntime.async(function getBlogMetaData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(readDirectoryFiles(directoryPath));

        case 2:
          files = _context4.sent;
          blogMetaDataArray = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context4.prev = 7;
          _iterator = files[Symbol.iterator]();

        case 9:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context4.next = 23;
            break;
          }

          file = _step.value;

          if (!(path.extname(file) === '.md')) {
            _context4.next = 20;
            break;
          }

          mdFilePath = path.join(directoryPath, file);
          _context4.next = 15;
          return regeneratorRuntime.awrap(fs.stat(mdFilePath));

        case 15:
          fileStats = _context4.sent;
          _context4.next = 18;
          return regeneratorRuntime.awrap(readFileContent(mdFilePath));

        case 18:
          content = _context4.sent;

          if (content) {
            json = parseYaml(content);
            blogMetaDataArray.push({
              file: file,
              title: json.title,
              createdAt: fileStats.birthtime,
              publishedAt: new Date(json.publishedAt),
              listVisible: json.listVisible,
              tags: json.tags || []
            });
          }

        case 20:
          _iteratorNormalCompletion = true;
          _context4.next = 9;
          break;

        case 23:
          _context4.next = 29;
          break;

        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context4.t0;

        case 29:
          _context4.prev = 29;
          _context4.prev = 30;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 32:
          _context4.prev = 32;

          if (!_didIteratorError) {
            _context4.next = 35;
            break;
          }

          throw _iteratorError;

        case 35:
          return _context4.finish(32);

        case 36:
          return _context4.finish(29);

        case 37:
          return _context4.abrupt("return", blogMetaDataArray.sort(function (first, last) {
            return new Date(last.publishedAt) - new Date(first.publishedAt);
          }));

        case 38:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[7, 25, 29, 37], [30,, 32, 36]]);
}; // Main workflow


var getMetaDataBySortBlog = function getMetaDataBySortBlog() {
  var MAIN_MD_FILE_PATH, BLOG_FOLDER_PATH, OUTPUT_FILE_PATH, blogMetaDataArray;
  return regeneratorRuntime.async(function getMetaDataBySortBlog$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          MAIN_MD_FILE_PATH = path.join(process.cwd(), 'data');
          BLOG_FOLDER_PATH = path.join(MAIN_MD_FILE_PATH, 'blogs');
          OUTPUT_FILE_PATH = path.join(MAIN_MD_FILE_PATH, 'blogs.json');
          _context5.next = 5;
          return regeneratorRuntime.awrap(getBlogMetaData(BLOG_FOLDER_PATH));

        case 5:
          blogMetaDataArray = _context5.sent;
          _context5.next = 8;
          return regeneratorRuntime.awrap(writeFileContent(OUTPUT_FILE_PATH, JSON.stringify(blogMetaDataArray, null, 2)));

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
};

getMetaDataBySortBlog();