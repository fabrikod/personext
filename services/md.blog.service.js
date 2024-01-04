import { BLOG } from '@/constrait/columns'
import {
  deletedBlogFile,
  getBlogBySlugData,
  readJsonFileData,
  updateBlogFile,
  updatedBlogFile,
} from '@/dataAccess/mdFileAccess/mdFileAccess'
import { toObject } from '@/helpers'
import { blogValid } from '@/helpers/valid'

export const deletedBlogService = async id => {
  const jsonBlogs = await readJsonFileData()
  const blogIndex = jsonBlogs.findIndex(blog => blog.id === id)

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

  const jsonBlogs = await readJsonFileData()
  const isBlogIndex = jsonBlogs.findIndex(
    blog => blog.file === `${blogData.data.slug.split('/')[1]}.md`
  )

  if (isBlogIndex !== -1) {
    throw Error('slug value must be unic')
  }

  const blogIndex = jsonBlogs.findIndex(blog => blog.id === blogData.data.id)

  const fileName = jsonBlogs[blogIndex].file
  jsonBlogs[blogIndex] = {
    ...jsonBlogs[blogIndex],
    title: blogData.data.title,
    file: `${blogData.data.slug.split('/')[1]}.md`,
    // publishedAt: blogData.data.publishedAt,
    // listVisible: blogData.data.listVisible,
    // tags: blogData.data.tags
  }

  await updatedBlogFile(jsonBlogs)

  const blog = await getBlogBySlugData(fileName)
  const jsonBlog = toObject(blog)

  const newJsonBlog = Object.assign({}, jsonBlog, blogData.data)

  const updateBlog = await updateBlogFile(fileName, newJsonBlog)

  return updateBlog
}
