import { getSettingsService, getUserService } from '@/services/md.services'

export default async function handler(req, res) {
  const user = await getUserService()
  const settings = await getSettingsService()

  res.status(200).json({
    user,
    settings,
  })
}
