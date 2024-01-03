import {
  getBlogsFilesData,
  getUserFileData,
  getBlogBySlugData,
  getBlogFileJsonData,
  readJsonFileData,
  getPulicationsFileData,
  getSettingsFileData,
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

export const getUserService = async () => {
  const user = await getUserFileData()
  const jsonUser = toObject(user)
  jsonUser.fullName = `${jsonUser.name} ${jsonUser.surname}`
  return jsonUser
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

export const getArchives = async () => {
  const archives = await readJsonFileData()
  const groupedData = {}

  archives.forEach(item => {
    const publishedAt = new Date(item.publishedAt)
    const year = publishedAt.getFullYear()
    const month = publishedAt.getMonth() + 1 // Months are 0-based, so add 1 to get the actual month.
    const day = publishedAt.getDay()

    if (!groupedData[year]) {
      groupedData[year] = {}
    }

    if (!groupedData[year][month]) {
      groupedData[year][month] = []
    }

    groupedData[year][month].push(item)
  })

  const goodGruppedData = []

  for (const [key, monthList] of Object.entries(groupedData)) {
    goodGruppedData.push({
      year: key,
      monthList: Object.entries(monthList)
        .reverse()
        .map(month => ({
          month: month[0],
          titleList: month[1].reverse().map(({ title, publishedAt, file }) => ({
            title,
            publishedAt,
            slug: `/${file.split('.')[0]}`,
          })),
        })),
    })
  }

  return goodGruppedData.reverse()
}

export const getPablicationsService = async fields => {
  const publications = await getPulicationsFileData()
  const jsonPublications = toObject(publications)

  if (fields) {
    const { name } = fields
    const data = name ? jsonPublications[name] : jsonPublications
    data.length = 5

    return data
  }

  return jsonPublications
}

export const getSettingsService = async settingName => {
  const settings = await getSettingsFileData()
  const settingsJson = toObject(settings)
  return settingName ? settingsJson[settingName] : settingsJson
}
