import { getBlogJsonService } from "@/services/md.services"

export default async function handler(req, res) {
  const { query } = req

  try {
    const { data, meta } = await getBlogJsonService({ ...query })
    res.status(200).json({
      data, meta
    })
  } catch (error) {
    res.status(200).json({
      error
    })
  }
}