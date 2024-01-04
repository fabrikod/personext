import { getBlogJsonService } from '@/services/md.services'

export default async function handler(req, res) {
  const { query } = req
  const newQuery = {
    page: query.page,
    perpage: query.perpage,
  }
  if (query.tag) {
    newQuery.tag = query.tag
  }
  const { data, meta } = await getBlogJsonService(newQuery)
  res.status(200).json({
    data,
    meta,
  })
}
