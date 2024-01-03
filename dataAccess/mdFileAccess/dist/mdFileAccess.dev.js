"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBlogFile = exports.deletedBlogFile = exports.getSettingsFileData = exports.getBlogFileJsonData = exports.readJsonFileDataBySlug = exports.readJsonFileData = exports.getBlogByFileNameData = exports.getBlogBySlugData = exports.getPulicationsFileData = exports.getUserFileData = exports.getFileData = exports.getBlogsFilesData = void 0;

var _constrait = require("@/constrait");

var fs = require('fs').promises;

var path = require('path');

var getBlogsFilesData = function getBlogsFilesData(jsonBlogArray) {
  var blogs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, mdFilePath, content, slug;

  return regeneratorRuntime.async(function getBlogsFilesData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // return json blog data
          blogs = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = jsonBlogArray[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 18;
            break;
          }

          file = _step.value.file;

          if (!(path.extname(file) === '.md')) {
            _context.next = 15;
            break;
          }

          mdFilePath = path.join(_constrait.BLOG_FOLDER_PATH, file);
          _context.next = 12;
          return regeneratorRuntime.awrap(fs.readFile(mdFilePath, 'utf8'));

        case 12:
          content = _context.sent;
          slug = file.split('.')[0];
          blogs.push({
            slug: slug,
            attributes: content
          });

        case 15:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 18:
          _context.next = 24;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 24:
          _context.prev = 24;
          _context.prev = 25;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 27:
          _context.prev = 27;

          if (!_didIteratorError) {
            _context.next = 30;
            break;
          }

          throw _iteratorError;

        case 30:
          return _context.finish(27);

        case 31:
          return _context.finish(24);

        case 32:
          return _context.abrupt("return", blogs);

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 20, 24, 32], [25,, 27, 31]]);
};

exports.getBlogsFilesData = getBlogsFilesData;

var getFileData = function getFileData(file, pathValue) {
  var dynamicPathValue, filePath, fileData;
  return regeneratorRuntime.async(function getFileData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //return data content
          dynamicPathValue = pathValue || 'data';
          filePath = path.join(process.cwd(), dynamicPathValue, file);
          _context2.next = 4;
          return regeneratorRuntime.awrap(fs.readFile(filePath, 'utf-8'));

        case 4:
          fileData = _context2.sent;
          return _context2.abrupt("return", fileData);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getFileData = getFileData;

var getUserFileData = function getUserFileData() {
  var userData;
  return regeneratorRuntime.async(function getUserFileData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          //return user data
          userData = getFileData('user.md');
          return _context3.abrupt("return", userData);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getUserFileData = getUserFileData;

var getPulicationsFileData = function getPulicationsFileData() {
  var publicationsData;
  return regeneratorRuntime.async(function getPulicationsFileData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          //return publications data
          publicationsData = getFileData('publications.md');
          return _context4.abrupt("return", publicationsData);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getPulicationsFileData = getPulicationsFileData;

var getBlogBySlugData = function getBlogBySlugData(slug) {
  var blogData;
  return regeneratorRuntime.async(function getBlogBySlugData$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          //return file content based on slug name
          blogData = getFileData("".concat(slug, ".md"), 'data/blogs');
          return _context5.abrupt("return", blogData);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.getBlogBySlugData = getBlogBySlugData;

var getBlogByFileNameData = function getBlogByFileNameData(slug) {
  var blogData;
  return regeneratorRuntime.async(function getBlogByFileNameData$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          //return file content based on slug name
          blogData = getFileData(slug, 'data/blogs');
          return _context6.abrupt("return", blogData);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.getBlogByFileNameData = getBlogByFileNameData;

var readJsonFileData = function readJsonFileData() {
  var fileContents;
  return regeneratorRuntime.async(function readJsonFileData$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          //return blogs.json
          // const data = require(JSON_BLOG_PATH)
          // console.log('datadata', data)
          // const fileContents = await fs.readFile(JSON_BLOG_PATH, 'utf8')
          // const jsonData = JSON.parse(fileContents)
          // return jsonData
          fileContents = require('@/data/blogs.json');
          return _context7.abrupt("return", fileContents);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.readJsonFileData = readJsonFileData;

var readJsonFileDataBySlug = function readJsonFileDataBySlug(slug) {
  var jsonData, findJsonData;
  return regeneratorRuntime.async(function readJsonFileDataBySlug$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(readJsonFileData());

        case 2:
          jsonData = _context8.sent;
          findJsonData = jsonData.find(function (_ref) {
            var file = _ref.file;
            return file.split('.')[0] === slug.split('/')[1];
          });
          return _context8.abrupt("return", findJsonData);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.readJsonFileDataBySlug = readJsonFileDataBySlug;

var getBlogFileJsonData = function getBlogFileJsonData(_ref2) {
  var perpage, page, queryTag, jsonData, PERPAGE, startIndex, endIndex, jsonBlogArray, blogs;
  return regeneratorRuntime.async(function getBlogFileJsonData$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          perpage = _ref2.perpage, page = _ref2.page, queryTag = _ref2.queryTag;
          _context9.next = 3;
          return regeneratorRuntime.awrap(readJsonFileData());

        case 3:
          jsonData = _context9.sent;
          jsonData = jsonData.filter(function (data) {
            return data.listVisible !== false && !Boolean(data.deletedAt);
          });

          if (queryTag) {
            jsonData = jsonData.filter(function (data) {
              return data.tags.find(function (blogTag) {
                return blogTag.key === queryTag;
              });
            });
          }

          PERPAGE = perpage || jsonData.length;
          startIndex = (page - 1) * PERPAGE;
          endIndex = startIndex + PERPAGE;
          jsonBlogArray = jsonData.slice(startIndex, endIndex);
          _context9.next = 12;
          return regeneratorRuntime.awrap(getBlogsFilesData(jsonBlogArray));

        case 12:
          blogs = _context9.sent;
          return _context9.abrupt("return", {
            data: blogs,
            meta: {
              total: jsonData.length,
              perpage: PERPAGE,
              pageCount: Math.ceil(jsonData.length / PERPAGE),
              page: page
            }
          });

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.getBlogFileJsonData = getBlogFileJsonData;

var getSettingsFileData = function getSettingsFileData() {
  var settingData;
  return regeneratorRuntime.async(function getSettingsFileData$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(getFileData('settings.md'));

        case 2:
          settingData = _context10.sent;
          return _context10.abrupt("return", settingData);

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
};

exports.getSettingsFileData = getSettingsFileData;

var deletedBlogFile = function deletedBlogFile(jsonBlogs) {
  return regeneratorRuntime.async(function deletedBlogFile$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(fs.writeFile(path.join(_constrait.JSON_BLOG_PATH), JSON.stringify(jsonBlogs), function (err) {
            if (err) {
              console.error('JSON file write error:', err);
              return;
            }
          }));

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  });
};

exports.deletedBlogFile = deletedBlogFile;

var updateBlogFile = function updateBlogFile() {
  return regeneratorRuntime.async(function updateBlogFile$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
        case "end":
          return _context12.stop();
      }
    }
  });
};

exports.updateBlogFile = updateBlogFile;