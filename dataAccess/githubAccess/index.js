import axios from 'axios'
const path = require('path')

export const commitSingleFileGithub = async ({
  username,
  repoName,
  fileName,
  branchName,
  token,
  message,
  content,
}) => {
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
  } catch (error) {
    console.error('Error in GitHub commit:', error)
  }
}

export const commitMultipleFileGithub = async ({
  username,
  repoName,
  files,
  branchName,
  token,
  message,
}) => {
  // Adım 1: Mevcut commit'in SHA'sını al
  const branchRes = await axios.get(
    `https://api.github.com/repos/${username}/${repoName}/git/ref/heads/${branchName}`,
    {
      headers: { Authorization: `token ${token}` },
    }
  )
  const latestCommitSha = branchRes.data.object.sha

  // Adım 2: Mevcut tree'nin SHA'sını al
  const commitRes = await axios.get(
    `https://api.github.com/repos/${username}/${repoName}/git/commits/${latestCommitSha}`,
    {
      headers: { Authorization: `token ${token}` },
    }
  )
  const baseTreeSha = commitRes.data.tree.sha

  // Adım 3: Yeni tree oluştur
  const newTree = []
  for (const file of files) {
    const blob = await axios.post(
      `https://api.github.com/repos/${username}/${repoName}/git/blobs`,
      {
        content: file.content,
        encoding: 'base64',
      },
      {
        headers: {
          Authorization: `token ${token}`,
          accept: 'application/vnd.github+json',
        },
      }
    )
    newTree.push({
      path: path.join(file.path, file.name),
      mode: '100644',
      type: 'blob',
      sha: blob.data.sha,
    })
  }

  // const newTree = files.map(file => ({
  //   path: path.join(file.path, file.name),
  //   mode: '100644',
  //   type: 'blob',
  //   content:
  //     '',
  // }))

  const treeRes = await axios.post(
    `https://api.github.com/repos/${username}/${repoName}/git/trees`,
    {
      base_tree: baseTreeSha,
      tree: newTree,
    },
    {
      headers: { Authorization: `token ${token}` },
    }
  )

  // Adım 4: Yeni commit oluştur
  const newTreeSha = treeRes.data.sha

  const newCommit = await axios.post(
    `https://api.github.com/repos/${username}/${repoName}/git/commits`,
    {
      message: message,
      tree: newTreeSha,
      parents: [latestCommitSha],
    },
    {
      headers: { Authorization: `token ${token}` },
    }
  )

  // Adım 5: Branch'i güncelle
  await axios.patch(
    `https://api.github.com/repos/${username}/${repoName}/git/refs/heads/${branchName}`,
    {
      sha: newCommit.data.sha,
    },
    {
      headers: { Authorization: `token ${token}` },
    }
  )
}
