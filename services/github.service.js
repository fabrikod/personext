import { commitMultipleFileGithub } from '@/dataAccess/githubAccess'

export const githubMultipleFileService = async (files, message) => {
  console.log('44444444444', {
    username: process.env.GITHUB_USERNAME,
    branchName: process.env.GITHUB_BRANCNAME,
    repoName: process.env.GITHUB_REPONAME,
    token: process.env.PERSONAL_ACCESS_TOKEN,
    files,
    message,
  })

  await commitMultipleFileGithub({
    username: process.env.GITHUB_USERNAME,
    branchName: process.env.GITHUB_BRANCNAME,
    repoName: process.env.GITHUB_REPONAME,
    token: process.env.PERSONAL_ACCESS_TOKEN,
    files,
    message,
  })
}
