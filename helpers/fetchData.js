
const fs = require('fs').promises;
const path = require('path');

export const getBlogsFilesData = async () => {
  const folderPath = `${process.cwd()}/data/blogs`;
  const blogs = []

  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      if (path.extname(file) === '.md') {
        const mdDosyaYolu = path.join(folderPath, file);
        const content = await fs.readFile(mdDosyaYolu, 'utf8');

        blogs.push({
          slug: file.split('.')[0],
          attributes: content
        })
      }
    }
  } catch (err) {
    console.error('Hata:', err);
  }

  return blogs
}

export const getFileData = async (file, pathValue) => {
  const dynamicPathValue = pathValue || 'data'
  const filePath = path.join(process.cwd(), dynamicPathValue, file)
  const fileData = await fs.readFile(filePath, 'utf-8');
  return fileData
}

export const getUserFileData = async () => {
  const userData = getFileData('user.md')
  return userData
}

export const getBlogBySlugData = async (slug) => {
  const blogData = getFileData(`${slug}.md`, 'data/blogs')
  return blogData
}