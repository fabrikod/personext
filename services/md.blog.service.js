import {
  deletedBlogFile,
  readJsonFileData,
} from '@/dataAccess/mdFileAccess/mdFileAccess'

export const deletedBlogService = async slug => {
  const jsonBlogs = await readJsonFileData()
  const blogIndex = jsonBlogs.findIndex(
    blog => `/${blog.file.split('.md')[0]}` === slug
  )

  if (blogIndex === -1) {
    throw 'not found slug'
  }

  jsonBlogs[blogIndex].deletedAt = new Date().toISOString()
  await deletedBlogFile(jsonBlogs)

  return slug
}
