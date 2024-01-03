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

export { slug, toObject, toYaml }
