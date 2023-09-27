import { getBlogsFilesData, getUserFileData, getBlogBySlugData, yaml } from "@/helpers"

export const getBlogService = async () => {
  const blogs = await getBlogsFilesData()
  const jsonBlogs = blogs.map(({ slug, attributes }) => ({
    slug,
    attributes: yaml(attributes)
  }))

  return jsonBlogs
}

export const getUserService = async () => {
  const user = await getUserFileData()
  const jsonUser = yaml(user)
  jsonUser.fullName = `${jsonUser.name} ${jsonUser.surname}`
  return jsonUser
}

export const getBlogBySlugService = async (slug) => {
  const blog = await getBlogBySlugData(slug)
  const jsonBlog = yaml(blog)
  return jsonBlog
}