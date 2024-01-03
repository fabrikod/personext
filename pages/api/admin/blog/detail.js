import { getBlogBySlugService } from '@/services/md.services'

export default async function handler(req, res) {
  const blog = await getBlogBySlugService(req.query.unicData)

  res.status(200).json({
    data: blog,
  })
}
