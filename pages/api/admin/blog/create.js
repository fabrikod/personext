import { createBlogService } from '@/services/md.blog.service'

export default async function handler(req, res) {
  // const blog = await createBlogService(req.body)

  res.status(200).json({
    data: req.body,
  })
}
