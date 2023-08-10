const fs = require('fs');
const yaml = require('js-yaml');

const fetchData = (file) => {
  console.log('filefilefilefile', file)
  const markdownContent = fs.readFileSync(process.cwd() + file, 'utf-8');
  console.log('markdownContentmarkdownContent', markdownContent)

  const yamlData = yaml.load(markdownContent);

  console.log('yamlDatayamlData', yamlData)

  return yamlData
}

export default async function handler(req, res) {
  try {
    const { file } = req.query;

    console.log('filefilefile11111', file)
    console.log('req.query', req.query)

    if (!file) {
      return res.status(400).json({ error: 'file parameter is missing.' });
    }

    const data = fetchData(file)

    res.status(200).json({
      data
    })
  } catch (error) {
    res.status(500).json({
      errors: ["Error encountered while reading readme file"]
    })
  }
}
