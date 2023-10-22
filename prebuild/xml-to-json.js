const fs = require('fs')
const jsyaml = require('js-yaml')
const xml2js = require('xml2js')
const cheerio = require('cheerio')
const axios = require('axios')
const filePath = require('path')

const getFileContent = path => {
  return fs.readFileSync(`${process.cwd()}/${path}`, 'utf-8')
}

const isImageUrl = url => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'] // Resim uzantıları
  const extension = url.split('.').pop().toLowerCase()
  return imageExtensions.includes(extension)
}

const xmlToJson = path => {
  const xmlContent = getFileContent(path)

  const parser = new xml2js.Parser({
    explicitArray: false, // Diziye dönüşen öğelerin otomatik eklenmesini engeller
    mergeAttrs: true, // Özellikleri ana özellik olarak birleştirir
  })

  parser.parseString(xmlContent, async (err, result) => {
    if (err) {
      console.error(err)
    } else {
      const filterData = result.rss.channel.item.filter(
        blog =>
          blog['wp:status'] === 'publish' && blog['wp:ping_status'] === 'open'
      )

      for (const [key, blog] of Object.entries(filterData).reverse()) {
        try {
          console.log('blog.linkblog.link', blog.link)
          const response = await axios.get(blog.link)
          var isimage = false
          var postImage
          var imgList
          var namePost
          var listImagePost
          newBlog = blog['content:encoded']

          if (response.status === 200) {
            const htmlContent = response.data
            const $ = cheerio.load(htmlContent)

            postImage = $('.wp-post-image')
            if (postImage.length) {
              const postImageData = await axios.get(postImage.attr('src'), {
                responseType: 'stream',
              })

              isimage = Boolean(postImage.length)

              namePost = postImage.attr('src').split('/')
              // fs.mkdir(
              //   filePath.join(process.cwd(), 'blogs', blog['wp:post_name']),
              //   { recursive: true },
              //   error => {
              //     if (error) {
              //       console.error('Klasör oluşturma hatası:')
              //     } else {
              //       console.log('Klasör başarıyla oluşturuldu:')
              //     }
              //   }
              // )
              // postImageData.data.pipe(
              //   fs.createWriteStream(
              //     filePath.join(
              //       process.cwd(),
              //       'blogs',
              //       blog['wp:post_name'],
              //       namePost[namePost.length - 1]
              //     )
              //   )
              // )
            }
            imgList = $('#single-post img')
            if (imgList.length) {
              for (const element of [...imgList]) {
                // console.log('alt image', element.attribs.src)

                if (
                  element.attribs.src &&
                  element.attribs.src.includes('abdullahonden.com')
                ) {
                  if (
                    // !fs.existsSync(
                    //   filePath.join(
                    //     process.cwd(),
                    //     'blogs',
                    //     blog['wp:post_name']
                    //   )
                    // )
                    true
                  ) {
                    // fs.mkdir(
                    //   filePath.join(
                    //     process.cwd(),
                    //     'blogs',
                    //     blog['wp:post_name']
                    //   ),
                    //   { recursive: true },
                    //   error => {
                    //     if (error) {
                    //       console.error('Klasör oluşturma hatası:')
                    //     } else {
                    //       console.log('Klasör başarıyla oluşturuldu:')
                    //     }
                    //   }
                    // )
                  }
                  const contentImageData = await axios.get(
                    element.attribs.src,
                    {
                      responseType: 'stream',
                    }
                  )

                  listImagePost = element.attribs.src.split('/')

                  // console.log(
                  //   'newBlog.includes(element.attribs.src)',
                  //   newBlog.includes(element.attribs.src)
                  // )
                  newBlog = newBlog.replace(
                    element.attribs.src,
                    `/img/blogs/${blog['wp:post_name']}/${
                      listImagePost[listImagePost.length - 1]
                    }`
                  )

                  // contentImageData.data.pipe(
                  //   fs.createWriteStream(
                  //     filePath.join(
                  //       process.cwd(),
                  //       'blogs',
                  //       blog['wp:post_name'],
                  //       listImagePost[listImagePost.length - 1]
                  //     )
                  //   )
                  // )
                }
                // console.log('222222222222222', newBlog === '')
              }
            }
          }
          console.log('1111111111111111', newBlog)

          const blogData = {
            publishedAt: blog['wp:post_date'],
            type: 'halftext',
            title: blog.title.trim(),
            description: blog.description,
            slug: `/${blog['wp:post_name']}`,
            image: isimage
              ? `/img/blogs/${blog['wp:post_name']}/${
                  namePost[namePost.length - 1]
                }`
              : '',
            tags: Array.isArray(blog.category)
              ? blog.category.map(tag => ({
                  key: tag.nicename,
                  name: tag._,
                }))
              : [],
            content: newBlog,
          }

          const yaml = jsyaml.dump(blogData)

          fs.writeFileSync(
            `${process.cwd()}/wordpress-blogs/${blog['wp:post_name'].replace(
              /_/g,
              '-'
            )}.md`,
            yaml,
            err => {
              if (err) {
                console.error('JSON file write error:', err)
                return
              }
            }
          )
        } catch (error) {
          console.log(
            'error',
            error.response ? error.response.statusText : error
          )
        }
      }
    }
  })
}

xmlToJson('abdullahnden.WordPress.2023-09-19.xml')
