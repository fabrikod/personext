import {
  getBlogsFilesData,
  getUserFileData,
  getBlogBySlugData,
  yaml,
  getBlogFileJsonData,
  readJsonFileData,
  getPulicationsFileData,
  getSettings,
} from '@/helpers'

export const getBlogService = async () => {
  const blogs = await getBlogsFilesData()
  const jsonBlogs = blogs.map(({ slug, attributes }) => ({
    slug,
    attributes: yaml(attributes),
  }))

  return jsonBlogs
}

export const getUserService = async () => {
  const user = await getUserFileData()
  const jsonUser = yaml(user)
  jsonUser.fullName = `${jsonUser.name} ${jsonUser.surname}`
  return jsonUser
}

export const getBlogBySlugService = async slug => {
  const blog = await getBlogBySlugData(slug)
  const jsonBlog = yaml(blog)
  return jsonBlog
}

export const getBlogJsonService = async ({ perpage, page, tag }) => {
  const data = await getBlogFileJsonData({
    perpage: perpage || 4,
    page: page || 1,
    queryTag: tag,
  })

  data.data = data.data.map(({ attributes }) => yaml(attributes))

  data.data = data.data.map(blog => ({
    ...blog,
    content: !blog.description
      ? blog.content.length > 500
        ? `${blog.content.substring(0, 500)}...`
        : blog.content
      : '',
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

export const getPablicationsData = async fields => {
  const publications = await getPulicationsFileData()
  const jsonPublications = yaml(publications)

  if (fields) {
    const { name } = fields
    const data = name ? jsonPublications[name] : jsonPublications
    data.length = 5

    return data
  }

  return jsonPublications
}

export const getSetting = ({ settingName }) => {
  return getSettings(settingName)
}
