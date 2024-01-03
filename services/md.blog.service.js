import {
  deletedBlogFile,
  getBlogBySlugData,
  readJsonFileDataBySlug,
} from '@/dataAccess/mdFileAccess/mdFileAccess'
import { toYaml, toObject } from '@/helpers/converters'

export const deletedBlogService = async slug => {
  const blogJson = await readJsonFileDataBySlug(slug)
  if (!blogJson) {
    throw 'not found slug'
  }

  const blog = await getBlogBySlugData(slug)
  const deletedBlog = {
    deletedAt: new Date().toISOString(),
    ...toObject(blog),
  }
  const deletedBlogYamlData = toYaml(deletedBlog)
  const blogFile = await deletedBlogFile(deletedBlogYamlData, slug)
  return blogFile
}
