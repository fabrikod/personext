const slug = (url) => {
  return url
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .trim();
}

const yaml = (content) => {
  const yaml = require('js-yaml');
  return yaml.load(content);
}

const getConvertSettings = (settings, settingName) => {
  const jsonData = yaml(settings)
  return settingName ? jsonData[settingName] : yamlData
}


const getSettings = (settingName) => {
  const fs = require('fs');
  const settings = fs.readFileSync(`${process.cwd()}/data/settings.md`, 'utf-8');
  return getConvertSettings(settings, settingName)
}

export {
  slug,
  yaml,
  getSettings
}