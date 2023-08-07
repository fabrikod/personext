const fs = require('fs');
const yaml = require('js-yaml');

const fetchData = () => {
  const delimiter = '---';
  const markdownContent = fs.readFileSync('./README.md', 'utf-8');
  throw new Error('aaaaaaaaaaaaaaa');
  var log = ["aaaaaaaaaaaaaaa"];
  const startIndex = markdownContent.indexOf(delimiter) + delimiter.length;
  log.push(startIndex)
  const endIndex = markdownContent.indexOf(delimiter, startIndex);
  log.push(endIndex)

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Invalid Markdown file format');
  }


  const extractedContent = markdownContent.slice(startIndex, endIndex).trim();

  log.push(extractedContent)

  const yamlData = yaml.load(extractedContent);

  log.push(yamlData)

  return {
    data: {
      log: log,
      user: {
        email: yamlData.email,
        name: yamlData.name,
        surname: yamlData.surname,
        fullName: `${yamlData.name} ${yamlData.surname}`,
        description: yamlData.description,
        job: yamlData.job,
        username: yamlData.username,
        socialMediaLinks: yamlData.socialMediaLinks
      },
      blogs: yamlData.blogList,
    }
  }
}

module.exports = {
  fetchData
}