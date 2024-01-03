import { deletedBlogService } from '@/services/md.blog.service'
import {
  getBlogBySlugService,
  getBlogJsonService,
} from '@/services/md.services'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
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
      break

    case 'DELETE':
      try {
        const blog = await deletedBlogService(req.body.slug)
        res.status(200).json({
          data: blog,
        })
      } catch (error) {
        return error
      }

    default:
      break
  }
}
