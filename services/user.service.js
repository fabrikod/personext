import { getUserFileData } from '@/dataAccess/mdFileAccess'
import { toObject } from '@/helpers'

export const getUserService = async () => {
  const user = await getUserFileData()
  const jsonUser = toObject(user)
  jsonUser.fullName = `${jsonUser.name} ${jsonUser.surname}`
  return jsonUser
}
