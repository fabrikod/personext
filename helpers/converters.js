const slug = (url) => {
  return url
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .trim();
}

const yaml = (content, settingName) => {
  const yaml = require('js-yaml');
  const yamlData = yaml.load(content);
  return settingName ? yamlData[settingName] : yamlData
}

const getSettings = (settingName) => {
  const fs = require('fs');
  const settings = fs.readFileSync(`${process.cwd()}/data/settings.md`, 'utf-8');
  return yaml(settings, settingName)
}

export {
  slug,
  yaml,
  getSettings
}