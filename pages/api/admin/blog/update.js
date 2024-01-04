import { updateBlogService } from '@/services/md.blog.service'

export default async function handler(req, res) {
  const blog = await updateBlogService(req.body)

  res.status(200).json({
    data: blog,
  })
}
