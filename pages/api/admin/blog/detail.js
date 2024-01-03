import { getBlogByIdService } from '@/services/md.services'

export default async function handler(req, res) {
  const blog = await getBlogByIdService(req.query.id)

  res.status(200).json({
    data: blog,
  })
}
