import { getBlogJsonService } from '@/services/md.services'

export default async function handler(req, res) {
  const { query } = req
  const { data, meta } = await getBlogJsonService({
    page: parseInt(query.page),
    perpage: parseInt(query.perpage),
  })
  res.status(200).json({
    data,
    meta,
  })
}
