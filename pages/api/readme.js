const fs = require('fs');
const yaml = require('js-yaml');

const fetchData = (file) => {
  console.log('filefilefilefil e', file)
  const path = `${process.cwd()}${file}`
  console.log('44444444444', path)
  const markdownContent = fs.readFileSync(process.cwd() + '/data/blogs.md', 'utf-8');
  const markdownContent2 = fs.readFileSync(path, 'utf-8');
  console.log('55555555555', path)
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
