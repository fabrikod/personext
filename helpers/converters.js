const fs = require('fs')
const jsyaml = require('js-yaml')

const slug = url => {
  return url
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .trim()
}

const toObject = content => {
  return jsyaml.load(content)
}

const toYaml = content => {
  return jsyaml.dump(content)
}

const getFileContent = path => {
  return fs.readFileSync(`${process.cwd()}/data/${path}`, 'utf-8')
}

const textToBase64 = content => {
  return Buffer.from(content).toString('base64')
}

const fileToBase64 = async file => {
  return fs.readFileSync(file, 'base64')
}

export { slug, toObject, toYaml, textToBase64, fileToBase64 }
