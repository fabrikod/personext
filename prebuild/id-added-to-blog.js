const fs = require('fs').promises
const path = require('path')
const yaml = require('js-yaml')
const { v4: uuidv4 } = require('uuid')
const MAIN_MD_FILE_PATH = `${process.cwd()}/../data`
const BLOG_FOLDER_PATH = `${MAIN_MD_FILE_PATH}/blogs`

const getMetaDataBySortBlog = async () => {
  const files = await fs.readdir(BLOG_FOLDER_PATH)
  let index = 0

  for (const file of files) {
    if (path.extname(file) === '.md') {
      const mdFilePath = path.join(BLOG_FOLDER_PATH, file)
      const content = await fs.readFile(mdFilePath, 'utf8')
      const json = yaml.load(content)

      const newJson = {
        id: uuidv4(),
        ...json,
      }

      await fs.writeFile(
        `${BLOG_FOLDER_PATH}/${file}`,
        yaml.dump(newJson),
        err => {
          if (err) {
            console.error('JSON file write error:', err)
            return
          }
        }
      )
    }
  }
}

getMetaDataBySortBlog()
