import { getBlogUpdate } from '@/services/md.blog.service'

export default async function handler(req, res) {
  const blog = await getBlogUpdate(req.body)

  res.status(200).json({
    data: blog,
  })
}
