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

const getConvertSettings = (settings, settingName) => {
  const jsonData = yaml(settings)
  return settingName ? jsonData[settingName] : jsonData
}

const getFileContent = path => {
  return fs.readFileSync(`${process.cwd()}/data/${path}`, 'utf-8')
}

const getSettings = settingName => {
  const settings = fs.readFileSync(`${process.cwd()}/data/settings.md`, 'utf-8')
  return getConvertSettings(settings, settingName)
}

export { slug, yaml, getSettings }
