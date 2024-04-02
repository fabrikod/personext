import {
  getBlogsFilesData,
  getBlogBySlugData,
  getBlogFileJsonData,
  readJsonFileData,
} from '@/dataAccess/mdFileAccess'
import { getBlogByFileNameData } from '@/dataAccess/mdFileAccess/mdFileAccess'

import { toObject } from '@/helpers'

export const getBlogService = async () => {
  const blogs = await getBlogsFilesData()
  const jsonBlogs = blogs.map(({ slug, attributes }) => ({
    slug,
    attributes: toObject(attributes),
  }))

  return jsonBlogs
}

export const getBlogBySlugService = async slug => {
  const isBlog = (await readJsonFileData())
    .filter(blog => !Boolean(blog.deletedAt))
    .findIndex(({ file }) => file.split('.md')[0] === slug)

  if (isBlog === -1) {
    return null
  }

  const blog = await getBlogBySlugData(slug)
  const jsonBlog = toObject(blog)
  return jsonBlog
}

export const getBlogByIdService = async id => {
  const isBlog = (await readJsonFileData())
    .filter(blog => !Boolean(blog.deletedAt))
    .find(blog => blog.id === id)

  if (!Boolean(isBlog)) {
    return null
  }

  const blog = await getBlogByFileNameData(isBlog.file)
  const jsonBlog = toObject(blog)
  return jsonBlog
}

export const getBlogJsonService = async ({ perpage, page, tag }) => {
  const data = await getBlogFileJsonData({
    perpage: Number(perpage) || 4,
    page: Number(page) || 1,
    queryTag: tag,
  })

  data.data = data.data.map(({ attributes }) => toObject(attributes))

  data.data = data.data.map(blog => ({
    ...blog,
    content: !Boolean(blog.description)
      ? blog.content.length > 500
        ? blog.content.substring(0, 500)
        : blog.content
      : blog.description,
  }))

  return data
}

export const getReadJsonFileService = async () => {
  const blog = await readJsonFileData()
  return blog
}
