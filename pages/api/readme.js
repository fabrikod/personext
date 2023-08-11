const fs = require('fs');
const yaml = require('js-yaml');

const fetchData = (filePath) => {
  const deger = '/data/user.md'
  console.log("111111111111", deger)
  console.log("222222222222", filePath)
  console.log("333333333333", `${process.cwd()}${filePath}`)
  console.log("444444444444", `${process.cwd()}${deger}`)

  const markdownContent = fs.readFileSync(`${process.cwd()}${filePath}`, 'utf-8');
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
