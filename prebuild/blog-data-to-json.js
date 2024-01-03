const fs = require('fs').promises
const path = require('path')

const yaml = content => {
  const yaml = require('js-yaml')
  return yaml.load(content)
}

const getMetaDataBySortBlog = async () => {
  const MAIN_MD_FILE_PATH = `${process.cwd()}/data`
  const BLOG_FOLDER_PATH = `${MAIN_MD_FILE_PATH}/blogs`

  const blogMetaDataArray = []
  const files = await fs.readdir(BLOG_FOLDER_PATH)

  for (const file of files) {
    if (path.extname(file) === '.md') {
      const mdFilePath = path.join(BLOG_FOLDER_PATH, file)
      const fileStats = await fs.stat(mdFilePath)
      const content = await fs.readFile(mdFilePath, 'utf8')
      const json = yaml(content)

      blogMetaDataArray.push({
        id: json.id,
        file: file,
        title: json.title,
        createdAt: fileStats.birthtime,
        publishedAt: new Date(json.publishedAt),
        // deletedAt: json.deletedAt || '',
        listVisible: json.listVisible,
        tags: json.tags || [],
      })
    }
  }

  blogMetaDataArray.sort(
    (first, last) => new Date(last.publishedAt) - new Date(first.publishedAt)
  )

  await fs.writeFile(
    `${process.cwd()}/data/blogs.json`,
    JSON.stringify(blogMetaDataArray, null, 2),
    err => {
      if (err) {
        console.error('JSON file write error:', err)
        return
      }
    }
  )
}

getMetaDataBySortBlog()
