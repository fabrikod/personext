const { v4: uuidv4 } = require('uuid')

import {
  deleteBlogFile,
  readJsonFileData,
} from '@/dataAccess/mdFileAccess/mdFileAccess'
import { toYaml } from '@/helpers'
import { githubMultipleFileService } from './github.service'
import { textToBase64 } from '@/helpers/converters'

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
  const jsonBlogs = await readJsonFileData()

  const isBlogIndex = jsonBlogs.findIndex(
    blog =>
      blog.file === `${blogData.data.slug}.md` && blogData.data.id !== blog.id
  )

  if (isBlogIndex !== -1) {
    throw Error('slug value must be unic')
  }

  const newUpdateBlog = {
    ...jsonBlogs[isBlogIndex],
    publishedAt: new Date(blogData.data.publishedAt).toISOString(),
    description: blogData.data.description,
    title: blogData.data.title,
    type: 'halftext',
    slug: blogData.data.slug,
    tags: [],
    content: blogData.data.content,
  }

  const files = [
    {
      path: 'data/blogs',
      name: `${newUpdateBlog.slug}.md`,
      content: textToBase64(toYaml(newUpdateBlog)),
    },
  ]

  if (blogData.data.image) {
    const heroImageName = `${uuidv4()}-${new Date().getTime()}.${
      blogData.data.image.mimetype
    }`
    newUpdateBlog.image = `/img/blogs/${heroImageName}`

    files.push({
      path: 'public/img/blogs',
      name: heroImageName,
      content: blogData.data.image.data,
    })
  }

  const message = 'create ' + files.map(file => file.name).join(' ')

  githubMultipleFileService(files, message)
}

export const createBlogService = async blogData => {
  const jsonBlogs = await readJsonFileData()
  const isBlogIndex = jsonBlogs.findIndex(
    blog => blog.file === `${blogData.data.slug}.md`
  )

  if (isBlogIndex !== -1) {
    throw Error('slug value must be unic')
  }

  const newCreateBlog = {
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    description: blogData.data.description,
    title: blogData.data.title,
    type: 'halftext',
    slug: blogData.data.slug,
    tags: [],
    content: blogData.data.content,
  }

  const files = [
    {
      path: 'data/blogs',
      name: `${newCreateBlog.slug}.md`,
      content: textToBase64(toYaml(newCreateBlog)),
    },
  ]

  if (blogData.data.image) {
    const heroImageName = `${uuidv4()}-${new Date().getTime()}.${
      blogData.data.image.mimetype
    }`
    newCreateBlog.image = `/img/blogs/${heroImageName}`

    files.push({
      path: 'public/img/blogs',
      name: heroImageName,
      content: blogData.data.image.data,
    })
  }

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
