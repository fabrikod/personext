const fs = require('fs')
const jsyaml = require('js-yaml')
const xml2js = require('xml2js')

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
  return settingName ? jsonData[settingName] : yamlData
}

const getFileContent = path => {
  return fs.readFileSync(`${process.cwd()}/data/${path}`, 'utf-8')
}

const getSettings = settingName => {
  const settings = fs.readFileSync(`${process.cwd()}/data/settings.md`, 'utf-8')
  return getConvertSettings(settings, settingName)
}

const xmlToJson = path => {
  const xmlContent = getFileContent(path)

  const parser = new xml2js.Parser({
    explicitArray: false, // Diziye dönüşen öğelerin otomatik eklenmesini engeller
    mergeAttrs: true, // Özellikleri ana özellik olarak birleştirir
  })

  parser.parseString(xmlContent, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      result.rss.channel.item.forEach((blog, index) => {
        const currentDate = new Date().toLocaleDateString('tr-TR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        })

        const blogData = {
          publishedAt: currentDate,
          createdAt: currentDate,
          type: 'halftext',
          title: blog.title.trim(),
          description: blog.description,
          slug: blog['wp:post_name'],
          image: blog.guid ? blog.guid._ : '',
          tags: Array.isArray(blog.category)
            ? blog.category.map(tag => ({
                key: tag._,
                name: tag.nicename,
              }))
            : [],
          content: blog['content:encoded'].trim(),
        }

        const yaml = jsyaml.dump(blogData)

        fs.writeFileSync(
          `${process.cwd()}/data/wordpress-blogs/${blog['wp:post_name']}.md`,
          yaml,
          err => {
            if (err) {
              console.error('JSON file write error:', err)
              return
            }
          }
        )
      })
    }
  })
}

export { slug, yaml, getSettings, xmlToJson }
