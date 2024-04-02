const fs = require('fs').promises
const path = require('path')
const yaml = require('js-yaml')

// Utility function for parsing YAML content
const parseYaml = content => yaml.load(content)

// Reads and returns the list of files in a directory
const readDirectoryFiles = async directoryPath => {
  try {
    return await fs.readdir(directoryPath)
  } catch (error) {
    console.error('Error reading directory:', error)
    return []
  }
}

// Reads and returns the content of a file
const readFileContent = async filePath => {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading file:', error)
    return null
  }
}

// Writes data to a file
const writeFileContent = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, data)
  } catch (error) {
    console.error('Error writing file:', error)
  }
}

// Processes blog files and extracts metadata
const getBlogMetaData = async directoryPath => {
  const files = await readDirectoryFiles(directoryPath)
  const blogMetaDataArray = []

  for (const file of files) {
    if (path.extname(file) === '.md') {
      const mdFilePath = path.join(directoryPath, file)
      const fileStats = await fs.stat(mdFilePath)
      const content = await readFileContent(mdFilePath)
      if (content) {
        const json = parseYaml(content)
        blogMetaDataArray.push({
          file,
          title: json.title,
          createdAt: fileStats.birthtime,
          publishedAt: new Date(json.publishedAt),
          listVisible: json.listVisible,
          tags: json.tags || [],
        })
      }
    }
  }

  return blogMetaDataArray.sort(
    (first, last) => new Date(last.publishedAt) - new Date(first.publishedAt)
  )
}

// Main workflow
const createMetaDataBySortBlogJson = async () => {
  const MAIN_MD_FILE_PATH = path.join(process.cwd(), 'data')
  const BLOG_FOLDER_PATH = path.join(MAIN_MD_FILE_PATH, 'blogs')
  const OUTPUT_FILE_PATH = path.join(MAIN_MD_FILE_PATH, 'blogs.json')

  const blogMetaDataArray = await getBlogMetaData(BLOG_FOLDER_PATH)
  await writeFileContent(
    OUTPUT_FILE_PATH,
    JSON.stringify(blogMetaDataArray, null, 2)
  )
}

createMetaDataBySortBlogJson()
