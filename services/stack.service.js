import { getStackFileData } from '@/dataAccess/mdFileAccess'
import { toObject } from '@/helpers'

export const getStackService = async () => {
  const stacks = await getStackFileData()
  const jsonStacks = toObject(stacks)
  return jsonStacks
}
