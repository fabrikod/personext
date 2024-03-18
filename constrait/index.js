const MAIN_MD_FILE_PATH = `${process.cwd()}/data`

const JSON_BLOG_PATH = `${MAIN_MD_FILE_PATH}/blogs.json`
const JSON_STACK_PATH = `${MAIN_MD_FILE_PATH}/stack.json`

const BLOG_FOLDER_PATH = `${MAIN_MD_FILE_PATH}/blogs`
const BLOG_IMAGES = `${MAIN_MD_FILE_PATH}/public/img/blogs`

const MENUS = [
  { text: 'Publications', href: '/#publications' },
  { text: 'Stacks', href: '/#stacks' },
  { text: 'Experiences', href: '/#experiences' },
  { text: 'Projects', href: '/#projects' },
  { text: 'Blogs', href: '/#blogs' },
  { text: 'Contact', href: '/#follow-me' },
]

export {
  BLOG_FOLDER_PATH,
  MAIN_MD_FILE_PATH,
  JSON_BLOG_PATH,
  JSON_STACK_PATH,
  BLOG_IMAGES,
  MENUS,
}
