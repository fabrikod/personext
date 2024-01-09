import {
  commitMultipleFileGithub,
  commitSingleFileGithub,
} from '@/dataAccess/githubAccess'

export const githubMultipleFileService = async (files, message) => {
  await commitMultipleFileGithub({
    username: process.env.GITHUB_USERNAME,
    branchName: process.env.GITHUB_BRANCNAME,
    repoName: process.env.GITHUB_REPONAME,
    token: process.env.PERSONAL_ACCESS_TOKEN,
    files,
    message,
  })
}

export const githubSingleFileService = async (
  base64,
  message,
  pathAndFileName
) => {
  await commitSingleFileGithub({
    username: process.env.GITHUB_USERNAME,
    branchName: process.env.GITHUB_BRANCNAME,
    repoName: process.env.GITHUB_REPONAME,
    token: process.env.PERSONAL_ACCESS_TOKEN,
    fileName: pathAndFileName,
    message: message,
    content: base64,
  })
}
