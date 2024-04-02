import { getSettingsFileData } from '@/dataAccess/mdFileAccess'
import { toObject } from '@/helpers'

export const getSettingsService = async settingName => {
  const settings = await getSettingsFileData()
  const settingsJson = toObject(settings)
  return settingName ? settingsJson[settingName] : settingsJson
}
