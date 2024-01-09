import { BLOG } from '@/constrait/columns'
const { v4: uuidv4 } = require('uuid')

import {
  deleteBlogFile,
  getBlogBySlugData,
  readJsonFileData,
  updateBlogJsonFile,
  updateBlogMdFile,
} from '@/dataAccess/mdFileAccess/mdFileAccess'
import { toObject, toYaml } from '@/helpers'
import { blogValid } from '@/helpers/valid'
import { githubMultipleFileService } from './github.service'
import { BLOG_FOLDER_PATH, BLOG_IMAGES } from '@/constrait'

export const deleteBlogService = async id => {
  const jsonBlogs = await readJsonFileData()
  const blogIndex = jsonBlogs.findIndex(blog => blog.id === id)

  if (blogIndex === -1) {
    throw 'not found slug'
  }

  jsonBlogs[blogIndex].deletedAt = new Date().toISOString()

  await deleteBlogFile(jsonBlogs)

  return slug
}

export const updateBlogService = async blogData => {
  const isValid = blogValid(BLOG, Object.keys(blogData.data))

  if (!isValid) {
    throw Error('incorrect column')
  }

  const jsonBlogs = await readJsonFileData()
  const isBlogIndex = jsonBlogs.findIndex(
    blog => blog.file === `${blogData.data.slug}.md`
  )

  if (isBlogIndex !== -1) {
    throw Error('slug value must be unic')
  }

  const blogIndex = jsonBlogs.findIndex(blog => blog.id === blogData.data.id)

  const fileName = jsonBlogs[blogIndex].file
  jsonBlogs[blogIndex] = {
    ...jsonBlogs[blogIndex],
    title: blogData.data.title,
    file: `${blogData.data.slug}.md`,
    // publishedAt: blogData.data.publishedAt,
    // listVisible: blogData.data.listVisible,
    // tags: blogData.data.tags
  }

  const blog = await getBlogBySlugData(fileName)
  const jsonBlog = toObject(blog)
  const newJsonBlog = Object.assign({}, jsonBlog, blogData.data)
  const updateBlog = await updateBlogMdFile(fileName, newJsonBlog)

  jsonBlogs.sort(
    (first, last) => new Date(last.publishedAt) - new Date(first.publishedAt)
  )

  await updateBlogJsonFile(jsonBlogs)

  return updateBlog
}

export const createBlogService = async blogData => {
  const isValid = blogValid(BLOG, Object.keys(blogData.data))

  if (!isValid) {
    throw Error('incorrect column')
  }

  const jsonBlogs = await readJsonFileData()
  const isBlogIndex = jsonBlogs.findIndex(
    blog => blog.file === `${blogData.data.slug}.md`
  )

  if (isBlogIndex !== -1) {
    throw Error('slug value must be unic')
  }

  const id = uuidv4()
  const heroImageName = `${uuidv4()}-${new Date().getTime()}.${
    blogData.data.image.mimetype
  }`

  const newCreateBlog = {
    id,
    createdAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    description: blogData.data.description,
    title: blogData.data.title,
    type: 'halftext',
    slug: blogData.data.slug,
    image: `/img/blogs/${heroImageName}`,
    tags: [],
    content: blogData.data.content,
  }

  const files = [
    {
      path: 'data/blogs',
      name: `${newCreateBlog.slug}.md`,
      content: toYaml(newCreateBlog),
    },
    {
      path: 'public/img/blogs',
      name: heroImageName,
      content: blogData.data.image.data,
    },
  ]

  console.log('33333333333', files)

  const message = 'create ' + files.map(file => file.name).join(' ')

  githubMultipleFileService(files, message)

  // const createBlog = await createBlogMdFile(newCreateBlog)

  // jsonBlogs.push({
  //   id: id,
  //   file: `${blogData.data.slug}.md`,
  //   title: blogData.data.title,
  //   createdAt: new Date().toISOString(),
  //   publishedAt: blogData.data.publishedAt,
  //   listVisible: blogData.data.listVisible || true,
  //   tags: blogData.data.tags || [],
  // })

  // jsonBlogs.sort(
  //   (first, last) => new Date(last.publishedAt) - new Date(first.publishedAt)
  // )

  // await updateBlogJsonFile(jsonBlogs)

  return true
}
