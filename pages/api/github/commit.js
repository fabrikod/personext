const axios = require('axios')

export default async function handler(req, res) {
  createGitHubFiles(
    'abdullahonden',
    'personext',
    'main',
    files,
    'Add multiple files',
    process.env.PERSONAL_ACCESS_TOKEN
  )

  res.status(200).json({
    data: 'test1',
  })
}

async function createGitHubFiles(owner, repo, branch, files, message, token) {
  // Adım 1: Mevcut commit'in SHA'sını al
  const branchRes = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}`,
    {
      headers: { Authorization: `token ${token}` },
    }
  )
  const latestCommitSha = branchRes.data.object.sha

  console.log('latestCommitSha', latestCommitSha)

  // Adım 2: Mevcut tree'nin SHA'sını al
  const commitRes = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/git/commits/${latestCommitSha}`,
    {
      headers: { Authorization: `token ${token}` },
    }
  )
  const baseTreeSha = commitRes.data.tree.sha

  // Adım 3: Yeni tree oluştur
  const newTree = files.map(file => ({
    path: file.path,
    mode: '100644',
    type: 'blob',
    content: file.content,
  }))

  const treeRes = await axios.post(
    `https://api.github.com/repos/${owner}/${repo}/git/trees`,
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
    `https://api.github.com/repos/${owner}/${repo}/git/commits`,
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
    `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`,
    {
      sha: newCommit.data.sha,
    },
    {
      headers: { Authorization: `token ${token}` },
    }
  )
}

// Örnek kullanım
const files = [
  { path: 'data/file1.txt', content: 'Hello World 1' },
  { path: 'public/file2.txt', content: 'Hello World 2' },
  { path: 'utils/file3.txt', content: 'Hello World 3' },
]
