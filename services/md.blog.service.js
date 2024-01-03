import { BLOG } from '@/constrait/columns'
import {
  deletedBlogFile,
  readJsonFileData,
  updateBlogFile,
} from '@/dataAccess/mdFileAccess/mdFileAccess'
import { blogValid } from '@/helpers/valid'

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

export const getBlogUpdate = async blogData => {
  const isValid = blogValid(BLOG, Object.keys(blogData.data))

  if (!isValid) {
    throw Error('incorrect column')
  }

  const updateBlog = await updateBlogFile(blogData.data)

  return updateBlog
}
