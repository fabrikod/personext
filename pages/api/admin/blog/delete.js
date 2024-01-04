import { deletedBlogService } from '@/services/md.blog.service'

export default async function handler(req, res) {
  const blog = await deletedBlogService(req.body.id)
  res.status(200).json({
    data: blog,
  })
}
