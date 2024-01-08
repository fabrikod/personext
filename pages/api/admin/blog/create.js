import { createBlogService } from '@/services/md.blog.service'
import { Formidable } from 'formidable'
import { promises as fs } from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

function parseData(req) {
  return new Promise((resolve, reject) => {
    const form = new Formidable({ multiples: true })
    form.parse(req, async (err, fields, files) => {
      if (err) reject({ err })

      const newFields = {}

      for (const [key, value] of Object.entries(fields)) {
        newFields[key] = value[0]
      }

      // const newFiles = {}

      for (const [key, value] of Object.entries(files)) {
        const imageBuffer = Buffer.from(await fs.readFile(value[0].filepath))
        const base64Image = imageBuffer.toString('base64')
        newFields[key] = {
          data: base64Image,
          mimetype: value[0].mimetype.split('/')[1],
        }
      }

      resolve({ err, data: newFields })
      // resolve({ err, fields: newFields, files: newFiles })
    })
  })
}

export default async function handler(req, res) {
  const data = await parseData(req)
  const blog = await createBlogService(data)

  res.status(200).json()
}
