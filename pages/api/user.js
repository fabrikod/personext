import { getSettingsService } from '@/services/setting.service'
import { getUserService } from '@/services/user.service'

export default async function handler(req, res) {
  const user = await getUserService()
  const settings = await getSettingsService()

  res.status(200).json({
    user,
    settings,
  })
}
