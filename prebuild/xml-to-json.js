const fs = require('fs')
const jsyaml = require('js-yaml')
const xml2js = require('xml2js')

const getFileContent = path => {
  return fs.readFileSync(`${process.cwd()}/${path}`, 'utf-8')
}

const isImageUrl = url => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'] // Resim uzantıları
  const extension = url.split('.').pop().toLowerCase()
  return imageExtensions.includes(extension)
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
      result.rss.channel.item
        .filter(
          blog =>
            blog['wp:status'] === 'publish' && blog['wp:ping_status'] === 'open'
        )
        .forEach((blog, index) => {
          console.log('blog.guidblog.guid', blog.guid)
          const blogData = {
            publishedAt: blog['wp:post_date'],
            type: 'halftext',
            title: blog.title.trim(),
            description: blog.description,
            slug: blog['wp:post_name'],
            image: isImageUrl(blog.guid ? blog.guid._ : '') ? blog.guid._ : '',
            tags: Array.isArray(blog.category)
              ? blog.category.map(tag => ({
                  key: tag.nicename,
                  name: tag._,
                }))
              : [],
            content: blog['content:encoded'].trim(),
          }

          const yaml = jsyaml.dump(blogData)

          fs.writeFileSync(
            `${process.cwd()}/wordpress-blogs/${blog['wp:post_name'].replace(
              /_/g,
              '-'
            )}.md`,
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

xmlToJson('abdullahnden.WordPress.2023-09-19.xml')
