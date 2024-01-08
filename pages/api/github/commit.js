const fs = require('fs').promises
export default async function handler(req, res) {
  console.log('111111111', process.cwd())

  const files = await fs.readdir(process.cwd())

  console.log('222222222', files)

  const files2 = await fs.readdir(`${process.cwd()}/../`)
  console.log('3333333333', files)

  res.status(200).json({
    data: 'test',
  })
}
