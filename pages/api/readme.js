const fs = require('fs');
const yaml = require('js-yaml');

const fetchData = (filePath) => {
  const blogs = '/data/blogs.md'
  const user = '/data/user.md'
  const socials = '/data/socials.md'

  var markdownContent = {}

  switch (filePath) {
    case blogs:
      markdownContent = fs.readFileSync(`${process.cwd()}${blogs}`, 'utf-8');
      break;

    case user:
      markdownContent = fs.readFileSync(`${process.cwd()}${user}`, 'utf-8');
      break;

    case socials:
      markdownContent = fs.readFileSync(`${process.cwd()}${socials}`, 'utf-8');
      break;

    default:
      markdownContent = fs.readFileSync(`${process.cwd()}${blogs}`, 'utf-8');
      break;
  }

  const yamlData = yaml.load(markdownContent);

  return yamlData
}

export default async function handler(req, res) {
  try {
    const { file } = req.query;

    if (!file) {
      return res.status(400).json({ error: 'file parameter is missing.' });
    }

    const data = fetchData(file)

    res.status(200).json({
      data
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      errors: ["Error encountered while reading readme file"]
    })
  }
}
