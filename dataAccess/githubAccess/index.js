import { toBase64 } from '@/helpers/converters'

const axios = require('axios')

export const commitFileGithub = async ({
  username,
  repoName,
  fileName,
  branchName,
  type,
  text,
}) => {
  const content = toBase64(text)
  const message = `${type} ${fileName}`
  const url = `https://api.github.com/repos/${username}/${repoName}/contents/${fileName}`
  try {
    const response = await axios.put(
      url,
      {
        message: message,
        content: content,
        branch: branchName,
      },
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    )

    console.log(response.data)
  } catch (error) {
    console.error('Error in GitHub commit:', error)
  }
}
