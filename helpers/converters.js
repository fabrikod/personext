const fs = require('fs')
const jsyaml = require('js-yaml')

const slug = url => {
  return url
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .trim()
}

const yaml = content => {
  return jsyaml.load(content)
}

const getFileContent = path => {
  return fs.readFileSync(`${process.cwd()}/data/${path}`, 'utf-8')
}

export { slug, yaml }
