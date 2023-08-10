const fs = require('fs');
const yaml = require('js-yaml');

const fetchData = () => {
  console.log("111111111111111", process.cwd() + '/README.md')
  const delimiter = '---';
  const markdownContent = fs.readFileSync(process.cwd() + '/README.md', 'utf-8');
  console.log("markdownContent", markdownContent)
  const startIndex = markdownContent.indexOf(delimiter) + delimiter.length;
  const endIndex = markdownContent.indexOf(delimiter, startIndex);
  console.log("startIndex", startIndex)

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Invalid Markdown file format');
  }

  const extractedContent = markdownContent.slice(startIndex, endIndex).trim();
  console.log("extractedContent", extractedContent)

  const yamlData = yaml.load(extractedContent);
  console.log("yamlData", yamlData)

  return yamlData
}

export default async function handler(req, res) {
  try {
    const data = fetchData()
    res.status(200).json({
      data: {
        user: {
          email: data.email,
          name: data.name,
          surname: data.surname,
          fullName: `${data.name} ${data.surname}`,
          description: data.description,
          job: data.job,
          username: data.username,
          socialMediaLinks: data.socialMediaLinks
        },
        blogs: data.blogList,
      }
    })
  } catch (error) {
    res.status(500).json({
      errors: ["Error encountered while reading readme file"]
    })
  }
}
